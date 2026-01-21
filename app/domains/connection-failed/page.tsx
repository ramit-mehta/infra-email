"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConnectionFailedPage() {
  const router = useRouter();

  return (
    <div className="px-10 py-4 max-w-4xl">
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center mb-6">
          <Frown className="text-red-500" size={36} />
        </div>

        <h1 className="text-lg font-semibold mb-2">Connection Failed.</h1>

        <p className="text-sm text-gray-500 max-w-md mb-6">
          We couldn’t connect to the server. Please check your details (host,
          port, and password) and try again.
        </p>

        <Button
          className="bg-blue-600 hover:bg-blue-900 cursor-pointer"
          onClick={() => router.push("/domains")}
        >
          <ChevronLeft /> Back to Domain Portfolio
        </Button>
      </div>
    </div>
  );
}
