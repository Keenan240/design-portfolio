"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function TellKeenanPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    setOpen(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/tell-keenan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() || undefined, note: note.trim() || undefined }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        setName("");
        setNote("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <div
              className="relative w-full max-w-[420px] bg-white border border-[#ededed] rounded-[25px] shadow-xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 p-1 rounded-lg text-[#757575] hover:text-black hover:bg-[#f5f5f5] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-[20px] md:text-[22px] font-semibold text-black text-center pr-8">
              Keenan is still working on the case study 😅
            </p>

            {status === "sent" ? (
              <p className="mt-6 text-center text-[#4a4a4a] text-[15px]">
                Thanks — Keenan&apos;s been notified.
              </p>
            ) : (
              <>
                <p className="mt-4 text-center text-[#4a4a4a] text-[15px]">
                  Tell Keenan to work harder
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="tell-keenan-name" className="block text-[13px] font-medium text-[#757575] mb-1.5">
                      Your name (optional)
                    </label>
                    <input
                      id="tell-keenan-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-xl border border-[#ededed] bg-[#fafafa] text-black placeholder:text-[#acacac] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#757575]"
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label htmlFor="tell-keenan-note" className="block text-[13px] font-medium text-[#757575] mb-1.5">
                      Note (optional)
                    </label>
                    <textarea
                      id="tell-keenan-note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Leave a note..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-[#ededed] bg-[#fafafa] text-black placeholder:text-[#acacac] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-[#757575] resize-none"
                      disabled={status === "sending"}
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-[14px] text-red-600">
                      Something went wrong. Try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-full bg-black text-white text-[15px] font-semibold hover:bg-[#1a1a1a] disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                  >
                    {status === "sending" ? "Sending…" : "Tell Keenan"}
                  </button>
                </form>
              </>
            )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
