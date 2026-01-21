import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type InfraCardProps = {
  title: string;
  desc: string;
  badge?: string;
  onClick?: () => void;
  icon: LucideIcon;
};

export function InfraCard({
  title,
  desc,
  badge,
  onClick,
  icon: Icon,
}: InfraCardProps) {
  return (
    <Card
      onClick={onClick}
      className="p-5 cursor-pointer transition hover:border-blue-500"
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
          <Icon size={18} />
        </div>

        {badge && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 leading-tight">{desc}</p>
    </Card>
  );
}
