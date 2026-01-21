"use client";

import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Server,
  Inbox,
  Flame,
  GitBranch,
  Database,
  Store,
  Users,
  HelpCircle,
  Settings,
} from "lucide-react";

const MENU = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Domains", icon: Globe, route: "/domains" },
  { label: "Infrastructure", icon: Server },
  { label: "Inboxes", icon: Inbox },
  { label: "Warmup", icon: Flame },
  { label: "Sequencer", icon: GitBranch },
  { label: "Data", icon: Database },
  { label: "Marketplace", icon: Store },
  { label: "Clients", icon: Users },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 min-h-screen border-r bg-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 px-4 py-5 border-b">
          <div className="w-8 h-8 cursor-pointer bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
            I
          </div>
          <div>
            <p className="font-semibold text-sm">Infra Email</p>
            <p className="text-xs text-gray-400">v1.01</p>
          </div>
        </div>

        {/* MENU */}
        <nav className="mt-4 px-3 text-sm">
          {MENU.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === "Domains";

            return (
              <div
                key={item.label}
                onClick={() => item.route && router.push(item.route)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
                  isActive
                    ? "bg-gray-100 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="px-3 pb-4 text-sm text-gray-600">
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
          <HelpCircle size={16} />
          <span>Support</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
          <Settings size={16} />
          <span>Settings</span>
        </div>

        {/* USER */}
        <div className="flex items-center gap-3 mt-4 px-3 py-2 border rounded-lg">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div className="text-xs">
            <p className="font-medium">shadcn</p>
            <p className="text-gray-400">m@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
