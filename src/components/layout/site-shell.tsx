"use client";

import { ReactNode, useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TelegramFloat } from "@/components/ui/telegram-float";
import { LeadModal } from "@/components/ui/lead-modal";
import { Loader } from "@/components/ui/loader";
import { BackgroundCode } from "@/components/ui/background-code";

export function SiteShell({ children }: { children: ReactNode }) {
  const [openLead, setOpenLead] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <Loader loading={loading} />
      <BackgroundCode />
      <div className="relative z-20">
        <Header onOpenLead={() => setOpenLead(true)} />
        <main className="pt-18">{children}</main>
        <Footer />
      </div>
      <TelegramFloat />
      <LeadModal open={openLead} onClose={() => setOpenLead(false)} />
    </div>
  );
}
