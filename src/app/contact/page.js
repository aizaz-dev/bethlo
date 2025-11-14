"use client";
import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact");
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const endpoint = activeTab === "contact" ? "/api/contact" : "/api/prayer";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus(data?.message || "error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex pt-55 items-center justify-center text-text-primary px-4 py-10 transition-colors">
      <div className="bg-bg-card rounded-lg shadow-card-light dark:shadow-card-dark w-full max-w-7xl">
        
        {/* Tabs */}
        <div className="flex border-b border-border-secondary">
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex-1 text-lg font-semibold py-3 transition-colors duration-300 rounded-tl-lg cursor-pointer
              ${
                activeTab === "contact"
                  ? "text-accent bg-bg-card"
                  : "text-text-primary bg-bg-secondary"
              }`}
          >
            Contact Us
          </button>

          <button
            onClick={() => setActiveTab("prayer")}
            className={`flex-1 text-lg font-semibold py-3 transition-colors duration-300 rounded-tr-lg cursor-pointer
              ${
                activeTab === "prayer"
                  ? "text-accent bg-bg-card"
                  : "text-text-primary bg-bg-secondary"
              }`}
          >
            Prayer Request
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-bg-secondary rounded-b-lg p-6 transition-colors">
          <form onSubmit={handleSubmit} className="bg-bg-card rounded-lg shadow-card-light dark:shadow-card-dark p-6 space-y-4">
            {activeTab === "contact" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1 text-text-secondary">Name</label>
                    <input name="name" required className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-text-secondary">Email</label>
                    <input name="email" type="email" required className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-text-secondary">Phone (optional)</label>
                    <input name="phone" className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-text-secondary">Subject</label>
                    <input name="subject" className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-text-secondary">Message</label>
                  <textarea name="message" required rows={5} className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1 text-text-secondary">Name</label>
                    <input name="name" required className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-text-secondary">Email (optional)</label>
                    <input name="email" type="email" className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-text-secondary">Prayer Request</label>
                  <textarea name="request" required rows={5} className="w-full rounded-md border border-border-secondary bg-bg-secondary px-3 py-2" />
                </div>
                <div className="flex items-center gap-2">
                  <input id="private" name="private" type="checkbox" className="rounded cursor-pointer" />
                  <label htmlFor="private" className="text-sm text-text-secondary cursor-pointer">Keep private (only Pastor will see)</label>
                </div>
              </>
            )}

            <div className="flex items-center gap-3">
              <button type="submit" disabled={submitting} className={`px-5 py-2 rounded-md bg-[#76C7CF] text-white font-medium cursor-pointer ${submitting ? "opacity-60" : "hover:opacity-90"}`}>
                {submitting ? "Sending..." : "Submit"}
              </button>
              {status && (
                <span className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                  {status === "success" ? "Thank you! We received your submission." : "Something went wrong. Please try again."}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
