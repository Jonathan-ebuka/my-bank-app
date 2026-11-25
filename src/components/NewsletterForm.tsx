"use client";

import { useState } from "react";
import { Arrow } from "./Pill";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="w-full max-w-xl"
    >
      <div className="group flex items-center gap-3 border-b border-ink pb-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="label min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-bone transition-transform duration-300 hover:scale-110"
        >
          <Arrow className="h-4 w-4" />
        </button>
      </div>
      <p role="status" className="label mt-3 min-h-5 text-muted">
        {submitted && "Sign-ups aren't connected yet — nothing was sent."}
      </p>
    </form>
  );
}
