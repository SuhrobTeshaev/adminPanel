import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type UserStatus = "confirmed" | "trusted" | "blocked";

interface UserStatusBadgeProps {
  status?: UserStatus;
  className?: string;
}

const UserStatusBadge = ({
  status = "confirmed",
  className,
}: UserStatusBadgeProps) => {
  const statusConfig = {
    confirmed: {
      label: "Confirmed",
      variant: "outline",
      className: "bg-blue-50 text-blue-700 border-blue-200",
    },
    trusted: {
      label: "Trusted",
      variant: "outline",
      className: "bg-green-50 text-green-700 border-green-200",
    },
    blocked: {
      label: "Blocked",
      variant: "outline",
      className: "bg-red-50 text-red-700 border-red-200",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium px-2.5 py-0.5 rounded text-xs",
        config.className,
        className,
      )}
    >
      {config.label}
    </Badge>
  );
};

export default UserStatusBadge;
