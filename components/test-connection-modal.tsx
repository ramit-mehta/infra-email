"use client";
import { Loader2 } from "lucide-react";
type TestConnectionModalProps = {
  open: boolean;
};

export default function TestConnectionModal({
  open,
}: TestConnectionModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-130 rounded-xl p-10 text-center shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-4 border-blue-100" />
            <Loader2
              className="absolute inset-0 m-auto text-blue-600 animate-spin"
              size={32}
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-2">
          Hold your seat tight we are testing your SMTP connection.
        </h2>
        <p className="text-sm text-gray-500">
          Please allow a few moments while we are testing your SMTP connection.
        </p>
      </div>
    </div>
  );
}
