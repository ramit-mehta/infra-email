"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type InfraModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  onNext: () => void;
};

export default function InfraModal({
  open,
  onClose,
  title,
  subtitle,
  onNext,
}: InfraModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-155 rounded-xl shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
            ⚡
          </div>
          <div>
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex gap-3 p-4 rounded-lg border bg-white">
            <input disabled type="radio" />
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">Use Our Pooled SMTP</p>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                  $15/mo
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Quick setup with our pre-configured providers.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-lg border border-blue-500 bg-blue-50">
            <input type="radio" checked readOnly />
            <div>
              <p className="text-sm font-medium">Use Your Own SMTP</p>
              <p className="text-xs text-gray-500 mt-1">
                Connect your existing provider accounts like Amazon SES,
                SendGrid etc.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium mb-2">Our Pooled SMTP Benefits</p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc ml-5">
            <li>Instant setup – no API keys needed</li>
            <li>Managed IP rotation and warm-up</li>
            <li>Built-in deliverability monitoring</li>
            <li>24/7 uptime guarantee</li>
          </ul>
        </div>

        <div className="flex justify-end">
          <Button
            className="bg-blue-600 hover:bg-blue-900 cursor-pointer"
            onClick={onNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
