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

const inputClass =
  "mt-1 w-full rounded-lg border border-primary/15 bg-background px-4 py-2.5 text-text shadow-sm transition-colors placeholder:text-text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const labelClass = "block text-sm font-medium text-text";

/**
 * Client Component: form needs state, validation, and submit handling.
 * Formspree integration will replace the placeholder submit handler.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) return;

    // Placeholder until Formspree is connected
    setStatus("success");
    setForm(initialState);
  }

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
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-primary/30 text-accent focus:ring-accent"
        />
        <span className="text-sm text-text-secondary">
          I consent to Viza Ltd contacting me regarding my enquiry.
        </span>
      </label>

      <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3">
        Send enquiry
      </Button>
    </form>
  );
}
