import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface UserStatusBadgeProps {
  status?: "confirmed" | "pending" | "rejected" | "blocked" | "trusted";
  className?: string;
}

const UserStatusBadge = ({ status, className }: UserStatusBadgeProps) => {
  const statusConfig = {
    confirmed: {
      label: "Подтвержденный",
      className: "bg-green-100 text-green-800",
      dotClassName: "bg-green-500",
    },
    pending: {
      label: "В ожидании",
      className: "bg-yellow-100 text-yellow-800",
      dotClassName: "bg-yellow-500",
    },
    rejected: {
      label: "Отклоненный",
      className: "bg-gray-100 text-gray-800",
      dotClassName: "bg-gray-500",
    },
    blocked: {
      label: "Заблокированный",
      className: "bg-red-100 text-red-800",
      dotClassName: "bg-red-500",
    },
    trusted: {
      label: "Доверенный",
      className: "bg-blue-100 text-blue-800",
      dotClassName: "bg-blue-500",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium  py-0.5 rounded-full text-xs px-[0]  flex  items-center justify-center",
        config.className,
        className
      )}
    >
      <span
        className={cn("w-2 h-2 rounded-full mr-2", config.dotClassName)}
      ></span>
      {config.label}
    </Badge>
  );
};

export default UserStatusBadge;
