"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Cloud, Send, Server, Eye, EyeOff, Zap } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TestConnectionModal from "@/components/test-connection-modal";

type Provider = "aws" | "sendgrid" | "azure" | "other";

export default function SMTPConfigPage() {
  const router = useRouter();

  const [provider, setProvider] = useState<Provider>("aws");
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [region, setRegion] = useState("");
  const [testing, setTesting] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="px-10 py-4 max-w-4xl">
      <div
        onClick={() => router.push("/domains/host-server")}
        className="flex items-center gap-2 mb-2 cursor-pointer"
      >
        <button className="p-1 rounded hover:bg-gray-100 cursor-pointer">
          <ArrowLeft size={18} />
        </button>
        <span className="text-sm text-gray-500">Domains</span>
      </div>

      <div className="flex items-start gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
          <Zap className="text-green-600" size={18} />
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Leveraged SMTP Infrastructure
          </h1>
          <p className="text-sm text-gray-500">
            Route inboxes through external providers.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
            ✓
          </div>
          <span className="text-sm">Host Server</span>
        </div>

        <div className="flex-1 h-px bg-gray-200" />

        <div className="flex items-center gap-2 text-blue-600">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
            2
          </div>
          <span className="text-sm font-medium">SMTP Config</span>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="border rounded-xl p-3 bg-white">
        <h2 className="font-medium mb-3">SMTP Configuration</h2>

        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { id: "aws", label: "Amazon SES", icon: Cloud },
            { id: "sendgrid", label: "SendGrid SMTP", icon: Send },
            { id: "azure", label: "Azure Communication", icon: Server },
            { id: "other", label: "Other SMTP", icon: Server },
          ].map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setProvider(p.id as Provider)}
                className={`border rounded-md py-2 flex flex-col items-center gap-1 text-sm ${
                  provider === p.id
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <Icon size={16} />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* FIELDS */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-0.5 block">API Key</label>
            <Input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter API key"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-0.5 block">
              Secret Key
            </label>

            <div className="relative">
              <Input
                type={showSecret ? "text" : "password"}
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                placeholder="Enter secret key"
                className="pr-10"
              />

              <button
                type="button"
                onClick={() => setShowSecret(!showSecret)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showSecret ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-0.5 block">Region</label>
            <Input
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="e.g. us-east-1"
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button
              onClick={() => {
                setTesting(true);

                setTimeout(() => {
                  setTesting(false);
                  router.push("/domains/connection-failed");
                }, 2500);
              }}
              className={"bg-blue-600 hover:bg-blue-700 cursor-pointer"}
            >
              Test Connection
            </Button>
          </div>
          <TestConnectionModal open={testing} />
        </div>
      </div>
    </div>
  );
}
