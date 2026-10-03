"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconPen, IconPhone } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        `We couldn't send that just now. Please call us at ${site.phone} and we'll get you sorted.`
      );
    }
  }

  return (
    <div className="form-card" id="estimate">
      <h3 className="form-card-head">Request Your Free Estimate</h3>
      <div className="form-card-body">
        {status === "sent" && (
          <p className="form-success" role="status">
            Thanks! Your estimate request is in. We&apos;ll call you shortly to
            confirm your job and give you an exact price.
          </p>
        )}
        {status === "error" && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <form onSubmit={onSubmit} noValidate={false}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="firstName">
                First Name <span className="req">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="field">
              <label htmlFor="lastName">
                Last Name <span className="req">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label htmlFor="phone">
              Phone <span className="req">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(323) 555-0000"
            />
          </div>

          <div className="field">
            <label htmlFor="message">
              Comment or Message <span className="req">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell us what you want gone and where it is (city or ZIP)."
            />
          </div>

          <div className="btn-row" style={{ marginTop: 20 }}>
            <button
              type="submit"
              className="btn btn-lg"
              disabled={status === "sending"}
            >
              <IconPen size={18} />
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
            <a className="btn btn-rust btn-lg" href={site.phoneHref}>
              <IconPhone size={18} />
              {site.phone}
            </a>
          </div>
        </form>

        <p className="form-note">
          No promo code needed. We answer every request, usually within one
          business hour during {site.hours}.
        </p>
      </div>
    </div>
  );
}
