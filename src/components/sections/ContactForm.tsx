"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { responseTimeNote } from "@/data/contact";
import { site, visaOptions } from "@/data/site";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  phone: string;
  email: string;
  visaType: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  visaType: "",
  message: "",
  consent: false,
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-1 w-full rounded-lg border border-primary/15 bg-background px-4 py-2.5 text-text shadow-sm transition-colors placeholder:text-text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const labelClass = "block text-sm font-medium text-text";

const chipClass = (selected: boolean, onBanner?: boolean) =>
  `cursor-pointer rounded-lg border px-3 py-2 text-left text-xs font-medium transition-colors sm:text-sm ${
    selected
      ? "border-primary bg-primary text-white"
      : onBanner
        ? "border-primary/20 bg-background text-primary hover:border-primary/40"
        : "border-primary/15 bg-background text-primary hover:border-primary/40 hover:bg-primary/5"
  }`;

const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

/**
 * Client Component: form state, validation, and Formspree submit (browser → Formspree).
 * Form ID in .env.local — restart `npm run dev` after changing it.
 */
export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [editingVisa, setEditingVisa] = useState(false);

  useEffect(() => {
    const visa = new URLSearchParams(window.location.search).get("visa");
    if (!visa) return;
    const isValid = visaOptions.some((option) => option.value === visa);
    if (!isValid) return;
    setForm((prev) => ({ ...prev, visaType: visa }));
  }, []);

  const selectedVisaLabel = visaOptions.find((option) => option.value === form.visaType)?.label;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.consent) return;

    if (!form.visaType) {
      setErrorMessage("Please select a visa type.");
      setStatus("error");
      return;
    }

    const visaLabel =
      visaOptions.find((option) => option.value === form.visaType)?.label ??
      form.visaType;

    if (!formspreeFormId || formspreeFormId === "your_form_id_here") {
      setErrorMessage(
        "Form ID not loaded. Put your real ID in .env.local (not your_form_id_here), delete .next, then run npm run dev again.",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          visaType: visaLabel,
          message: form.message,
          _replyto: form.email,
          _subject: `Website enquiry — ${visaLabel}`,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to send your enquiry.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact us by phone or WhatsApp.",
      );
    }
  };

  const updateVisaInUrl = (value: string) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("visa", value);
    } else {
      url.searchParams.delete("visa");
    }
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  };

  const selectVisaType = (value: string) => {
    setForm((prev) => ({ ...prev, visaType: value }));
    updateVisaInUrl(value);
    setEditingVisa(false);
  };

  const showVisaPicker = !form.visaType || editingVisa;
  const showVisaSummary = Boolean(form.visaType) && !editingVisa;

  if (status === "success") {
    return (
      <div
        className="rounded-xl border border-accent/30 bg-accent/5 px-6 py-8 text-center"
        role="status"
      >
        <span
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white"
          aria-hidden
        >
          ✓
        </span>
        <p className="mt-4 text-lg font-semibold text-primary">Thank you for your enquiry</p>
        <p className="mt-2 text-sm text-text-secondary">
          We have received your message and will be in touch shortly. {responseTimeNote}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </Button>
          <Button href={site.phoneHref} variant="primary">
            Call us
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && errorMessage && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      <div className="rounded-lg border border-accent/30 bg-accent/10 p-4 sm:p-5">
        {editingVisa && form.visaType ? (
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p id="visa-type-label" className="text-sm font-semibold text-primary">
              Pick a different visa type
            </p>
            <button
              type="button"
              className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setEditingVisa(false)}
            >
              Done
            </button>
          </div>
        ) : (
          <p id="visa-type-label" className={`${labelClass} mb-3`}>
            Type of visa <span className="text-accent">*</span>
          </p>
        )}

        {showVisaSummary && selectedVisaLabel && (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-primary">
              <span className="font-medium">Enquiring about:</span> {selectedVisaLabel}
            </p>
            <button
              type="button"
              className="rounded-lg border border-primary/20 bg-background px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setEditingVisa(true)}
            >
              Change
            </button>
          </div>
        )}

        {showVisaPicker && (
          <div
            className="flex flex-wrap gap-2"
            role="radiogroup"
            aria-labelledby="visa-type-label"
          >
              {visaOptions.map((option, index) => (
                <label
                  key={option.value}
                  className={chipClass(form.visaType === option.value, true)}
                >
                  <input
                    type="radio"
                    name="visaType"
                    value={option.value}
                    checked={form.visaType === option.value}
                    required={index === 0 && !form.visaType}
                    disabled={status === "submitting"}
                    className="sr-only"
                    onChange={(e) => selectVisaType(e.target.value)}
                  />
                  {option.label}
                </label>
              ))}
          </div>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            value={form.name}
            disabled={status === "submitting"}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            value={form.phone}
            disabled={status === "submitting"}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          value={form.email}
          disabled={status === "submitting"}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClass}
          value={form.message}
          disabled={status === "submitting"}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          checked={form.consent}
          disabled={status === "submitting"}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-primary/30 text-accent focus:ring-accent"
        />
        <span className="text-sm text-text-secondary">
          I consent to Viza Ltd contacting me regarding my enquiry. See our{" "}
          <Link
            href="/privacy"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <Button
        type="submit"
        variant="primary"
        className="w-full px-8 py-3 sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
      <p className="text-sm text-text-secondary">
        By submitting, you agree we may contact you about your enquiry. {responseTimeNote}
      </p>
    </form>
  );
};
