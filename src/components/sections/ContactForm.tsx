"use client";

import { useState, type FormEvent } from "react";
import { visaOptions } from "@/data/site";
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

const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

/**
 * Client Component: form state, validation, and Formspree submit (browser → Formspree).
 * Form ID in .env.local — restart `npm run dev` after changing it.
 */
export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.consent) return;

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
        },
      );

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

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-primary">Thank you for your enquiry</p>
        <p className="mt-2 text-sm text-text-secondary">
          We have received your message and will be in touch shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
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
        <label htmlFor="visaType" className={labelClass}>
          Type of visa <span className="text-accent">*</span>
        </label>
        <select
          id="visaType"
          name="visaType"
          required
          className={inputClass}
          value={form.visaType}
          disabled={status === "submitting"}
          onChange={(e) => setForm({ ...form, visaType: e.target.value })}
        >
          <option value="">Select a visa type</option>
          {visaOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
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
          I consent to Viza Ltd contacting me regarding my enquiry.
        </span>
      </label>

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto px-8 py-3"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
};
