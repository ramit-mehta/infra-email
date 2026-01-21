"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Upload, Zap } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HostServerPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<"password" | "ssh">("password");

  return (
    <div className="px-10 py-4 max-w-4xl">
      <div
        onClick={() => router.push("/domains")}
        className="flex items-center gap-2 mb-2 cursor-pointer"
      >
        <button className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="cursor-pointer" size={18} />
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
        <div className="flex items-center gap-2 text-blue-600">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
            1
          </div>
          <span className="text-sm font-medium">Host Server</span>
        </div>

        <div className="flex-1 h-px bg-gray-200" />

        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-6 h-6 rounded-full border text-xs flex items-center justify-center">
            2
          </div>
          <span className="text-sm">SMTP Config</span>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="border rounded-xl p-3 bg-white">
        <h2 className="font-medium mb-3">Server Connection Details</h2>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-0.5 block">
              Server Name
            </label>
            <Input placeholder="e.g. marketing lead server" />
          </div>

          <div>
            <label className="text-sm font-medium mb-0.5 block">
              Root Username
            </label>
            <Input placeholder="e.g. root" />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Authentication Method
            </label>

            <div className="flex gap-3 mb-2">
              <button
                onClick={() => setAuthMethod("password")}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-md border text-sm ${
                  authMethod === "password"
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <Lock size={14} />
                Password
              </button>

              <button
                onClick={() => setAuthMethod("ssh")}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-md border text-sm ${
                  authMethod === "ssh"
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <Upload size={14} />
                Upload SSH Key
              </button>
            </div>

            {authMethod === "password" && (
              <div className="mt-2">
                <Input type="password" placeholder="Enter root password" />
              </div>
            )}

            {authMethod === "ssh" && (
              <div className="mt-2 border rounded-md px-4 py-2 text-sm text-gray-500">
                Upload SSH key (UI only)
              </div>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-0.5 block">
              Server IP Address
            </label>
            <Input placeholder="e.g. 192.168.0.1" />
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-blue-600 hover:bg-blue-900 cursor-pointer"
              onClick={() => router.push("/domains/smtp-config")}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
