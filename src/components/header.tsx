import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton.tsx";

const Header = (props: {
  containerClassName?: string;
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
}) => {
  return (
    <div
      className={cn("flex justify-between px-6 py-2", props.containerClassName)}
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{props.title}</h2>
        {props.subtitle && (
          <p className="text-muted-foreground">{props.subtitle}</p>
        )}
      </div>
      <div className="flex items-center space-x-3">{props.children}</div>
    </div>
  );
};

const HeaderStat = (props: {
  value?: string | ReactNode;
  label: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        props.className,
      )}
    >
      {!props.value ? (
        <Skeleton className="w-16 h-4 mb-1" />
      ) : (
        <span className={"font-medium"}>{props.value}</span>
      )}
      <span className={"text-sm text-muted-foreground"}>{props.label}</span>
    </div>
  );
};

export { Header, HeaderStat };
