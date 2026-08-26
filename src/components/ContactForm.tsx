import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="text-muted-foreground">Name</span>
          <input
            required
            name="name"
            className="rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="Jane Doe"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="text-muted-foreground">Work email</span>
          <input
            required
            type="email"
            name="email"
            className="rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            placeholder="jane@company.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="text-muted-foreground">What would you like to automate?</span>
        <textarea
          required
          name="message"
          rows={4}
          className="rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          placeholder="We handle quotes manually across email and spreadsheets..."
        />
      </label>
      <button
        type="submit"
        className="justify-self-start rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        {sent ? "Thanks — we'll be in touch" : "Send enquiry"}
      </button>
      {sent && (
        <p className="text-sm text-mint" role="status">
          Your message is noted. We reply to every enquiry within one business day.
        </p>
      )}
    </form>
  );
}
