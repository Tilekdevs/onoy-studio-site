"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useApp } from "@/lib/providers";

type Props = { open: boolean; onClose: () => void };

export function ContactModal({ open, onClose }: Props) {
  const { t } = useApp();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setMounted(typeof document !== "undefined");
  }, []);

  useEffect(() => {
    if (!open) setStatus("idle");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || "",
          telegramWhatsapp: data.get("telegramWhatsapp") || "",
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (!open || !mounted) return null;

  const modal = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto border border-[var(--border)] bg-[var(--bg)] p-6" onClick={e => e.stopPropagation()}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium text-[var(--fg)]">{t.contact.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center border border-[var(--border)] text-[var(--fg)] hover:border-[var(--fg)]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="mb-6 text-sm text-[var(--muted)]">{t.contact.subtitle}</p>

        {status === "success" && (
          <div className="mb-6 space-y-3">
            <p className="text-[var(--fg)]">{t.contact.success}</p>
            <p className="text-sm text-[var(--muted)]">{t.contact.successDetail}</p>
            <button
              type="button"
              onClick={onClose}
              className="border border-[var(--fg)] bg-[var(--fg)] px-4 py-2 text-sm text-[var(--bg)] hover:opacity-90"
            >
              {t.contact.cancel}
            </button>
          </div>
        )}
        {status === "error" && (
          <p className="mb-4 text-sm text-red-500">{t.contact.error}</p>
        )}

        {status !== "success" && (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-xs text-[var(--muted)]">
                {t.contact.name} *
              </label>
              <input
                id="contact-name"
                name="name"
                required
                className="w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--fg)] focus:border-[var(--fg)] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-xs text-[var(--muted)]">
                {t.contact.email} *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--fg)] focus:border-[var(--fg)] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1 block text-xs text-[var(--muted)]">
                {t.contact.phone}
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                className="w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--fg)] focus:border-[var(--fg)] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-telegram-whatsapp" className="mb-1 block text-xs text-[var(--muted)]">
                {t.contact.telegramWhatsapp}
              </label>
              <input
                id="contact-telegram-whatsapp"
                name="telegramWhatsapp"
                type="text"
                placeholder={t.contact.telegramWhatsappPlaceholder}
                className="w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--fg)] placeholder:text-[var(--muted)] focus:border-[var(--fg)] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-xs text-[var(--muted)]">
                {t.contact.message} *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                className="w-full resize-none border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--fg)] focus:border-[var(--fg)] focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex-1 border border-[var(--fg)] bg-[var(--fg)] py-3 text-sm text-[var(--bg)] transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {status === "sending" ? t.contact.sending : t.contact.send}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="border border-[var(--border)] px-4 py-3 text-sm text-[var(--fg)] hover:border-[var(--fg)]"
              >
                {t.contact.cancel}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
