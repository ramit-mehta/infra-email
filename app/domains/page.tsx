"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Mail, Monitor, Server, Network, Zap } from "lucide-react";
import { InfraCard } from "@/components/infra-card";
import { useState } from "react";
import InfraModal from "@/components/infra-modal";

type InfraType = "google" | "microsoft" | "private" | "shared" | "smtp" | null;

export default function DomainsPage() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [activeInfra, setActiveInfra] = useState<InfraType>(null);

  const openModal = (type: InfraType) => {
    setActiveInfra(type);
    setOpen(true);
  };

  return (
    <div className="px-10 relative">
      <div className="flex items-center gap-1 mt-4 mb-6">
        <div
          onClick={() => router.push("/domains")}
          className="flex items-center cursor-pointer"
        >
          <button className="rounded hover:bg-gray-100 p-1">
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm text-gray-500">Domains</span>
        </div>
      </div>

      <h1 className="text-xl font-semibold mb-8">
        Choose Infrastructure Where You Want to Host Your Email
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-6 max-w-6xl">
        <InfraCard
          title="Google Workspace"
          desc="Native integration with Google Workspace for seamless inbox creation."
          badge="Recommended"
          icon={Mail}
          onClick={() => openModal("google")}
        />

        <InfraCard
          title="Microsoft 360 / Outlook"
          desc="Direct integration with Office 365 tenants. We handle licensing and setup."
          icon={Monitor}
          onClick={() => openModal("microsoft")}
        />

        <InfraCard
          title="Private Infrastructure (Self-Hosted)"
          desc="Dedicated single-tenant VPS setup for complete isolation and control."
          icon={Server}
          onClick={() => openModal("private")}
        />

        <InfraCard
          title="Self-Hosted Shared Network"
          desc="Build your own multi-server, multi-IP power plant network."
          icon={Network}
          onClick={() => openModal("shared")}
        />

        <InfraCard
          title="Leveraged SMTP Infrastructure"
          desc="Route inboxes through external providers like SendGrid, SES, or pooled keys."
          icon={Zap}
          onClick={() => openModal("smtp")}
        />
      </div>

      {/* MODAL */}
      <InfraModal
        open={open}
        onClose={() => setOpen(false)}
        title={
          activeInfra === "google"
            ? "Google Workspace"
            : activeInfra === "microsoft"
              ? "Microsoft 360 / Outlook"
              : activeInfra === "private"
                ? "Private Infrastructure"
                : activeInfra === "shared"
                  ? "Self-Hosted Shared Network"
                  : "Leveraged SMTP Infrastructure"
        }
        subtitle={
          activeInfra === "google"
            ? "Native integration with Google Workspace."
            : activeInfra === "microsoft"
              ? "Direct integration with Office 365 tenants."
              : activeInfra === "private"
                ? "Dedicated single-tenant VPS setup."
                : activeInfra === "shared"
                  ? "Multi-server, multi-IP shared network."
                  : "Route inboxes through external providers."
        }
        onNext={() => {
          setOpen(false);
          router.push("/domains/host-server");
        }}
      />
    </div>
  );
}
