"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";

const interests = ["Buying", "Selling", "Renting", "Management", "Advisory"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Buying",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please tell us your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email";
    if (!form.message.trim()) err.message = "Add a short message";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error || "Something went wrong. Please try again.");
      } else {
        setSent(true);
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk."
        subtitle="Tell us what you're looking for — or what you'd like to sell. We read every message and reply within one working day."
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          {/* Left — details */}
          <Reveal className="flex flex-col gap-10">
            <div>
              <h2 className="font-display text-3xl">Reach us directly</h2>
              <p className="mt-3 max-w-sm leading-relaxed text-ink/60">
                Prefer to skip the form? We're a message or a call away.
              </p>
            </div>

            <ul className="space-y-6">
              <ContactRow
                icon={Mail}
                label="Email"
                value="hello@citymorehomes.com"
                href="mailto:hello@citymorehomes.com"
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value="+234 903 755 5786"
                href="tel:+2349037555786"
              />
              <ContactRow
                icon={MapPin}
                label="Office"
                value="Victoria Island, Lagos, Nigeria"
              />
            </ul>

            <div className="mt-auto rounded-2xl bg-ink p-7 text-bone">
              <p className="font-display text-xl">Office hours</p>
              <div className="mt-4 space-y-2 text-sm text-bone/70">
                <p className="flex justify-between">
                  <span>Monday – Friday</span> <span>9:00 – 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span> <span>10:00 – 15:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span> <span>By appointment</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-ink/10 bg-bone-light p-7 md:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-bone"
                    >
                      <Check size={28} />
                    </motion.span>
                    <h3 className="mt-6 font-display text-3xl">
                      Message sent!
                    </h3>
                    <p className="mt-3 max-w-sm text-ink/60">
                      Your message has been sent to{" "}
                      <strong>hello@citymorehomes.com</strong>. We'll be in
                      touch within one working day.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="link-wipe mt-7 text-sm font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <Field label="Full name" error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jane Adeyemi"
                        className="input"
                      />
                    </Field>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Email" error={errors.email}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@email.com"
                          className="input"
                        />
                      </Field>
                      <Field label="Phone (optional)">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={update("phone")}
                          placeholder="+234 ..."
                          className="input"
                        />
                      </Field>
                    </div>

                    <div>
                      <label className="eyebrow text-taupe-dark">
                        I'm interested in
                      </label>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {interests.map((it) => (
                          <button
                            type="button"
                            key={it}
                            onClick={() =>
                              setForm((f) => ({ ...f, interest: it }))
                            }
                            className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                              form.interest === it
                                ? "border-ink bg-ink text-bone"
                                : "border-ink/20 text-ink/70 hover:border-ink/50"
                            }`}
                          >
                            {it}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Field label="Message" error={errors.message}>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us a little about what you're looking for…"
                        className="input resize-none"
                      />
                    </Field>

                    {serverError && (
                      <p className="text-sm text-red-700">{serverError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-dark group w-full disabled:opacity-60"
                    >
                      {sending ? "Sending…" : "Send message"}
                      {!sending && (
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      <style jsx global>{`
        .input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(10, 10, 10, 0.2);
          padding: 0.6rem 0;
          font-size: 0.95rem;
          color: #0a0a0a;
          outline: none;
          transition: border-color 0.4s ease;
        }
        .input::placeholder {
          color: rgba(10, 10, 10, 0.35);
        }
        .input:focus {
          border-color: #0a0a0a;
        }
      `}</style>
    </>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="eyebrow text-taupe-dark">{label}</label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs text-red-700">{error}</p>}
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-eyebrow text-taupe-dark">
          {label}
        </p>
        <p className="mt-1 text-ink/85">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="group block transition-opacity hover:opacity-70"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
