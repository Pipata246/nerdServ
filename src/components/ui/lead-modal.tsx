"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4"
          onClick={onClose}
        >
          <motion.form
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            onSubmit={submit}
            className="glass max-h-[88vh] w-full max-w-md space-y-4 overflow-y-auto rounded-2xl p-5 sm:p-6"
          >
            <h3 className="text-2xl font-semibold">Оставить заявку</h3>
            <input required placeholder="Имя" className="field-control" />
            <input required type="email" placeholder="Email" className="field-control" />
            <textarea required placeholder="Сообщение" className="field-control min-h-28" />
            <button className="btn-primary w-full justify-center">{sent ? "Отправлено" : "Отправить"}</button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
