"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Project } from "./types";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProjectFolderIcon from "@/components/svg/ProjectFolderIcon";
import InProgressIcon from "@/components/svg/InProgressIcon";
import CompleteIcon from "@/components/svg/CompleteIcon";
import PendingIcon from "@/components/svg/PendingIcon";
import PlanningIcon from "@/components/svg/PlanningIcon";
import PostProductionIcon from "@/components/svg/PostProductionIcon";
import StatusIcon from "@/components/svg/StatusIcon";
import ClientIcon from "@/components/svg/ClientIcon";
import AssignIcon from "@/components/svg/AssignIcon";
import TaskProgressIcon from "@/components/svg/TaskProgressIcon";
import DollarIcon from "@/components/svg/DollarIcon";
import CalendarIcon from "@/components/svg/CalendarIcon";

import { useTranslations } from "next-intl";

type TranslationFn = ReturnType<typeof useTranslations>;

const getStatusConfig = (status: string, t: TranslationFn) => {
  switch (status.toLowerCase()) {
    case "in-progress":
      return {
        label: t("inProgress"),
        icon: <InProgressIcon />,
      };
    case "completed":
      return {
        label: t("completed"),
        icon: <CompleteIcon />,
      };
    case "pending":
      return {
        label: t("pending"),
        icon: <PendingIcon />,
      };
    case "planning":
      return {
        label: t("planning"),
        icon: <PlanningIcon />,
      };
    case "post production":
      return {
        label: t("postProduction"),
        icon: <PostProductionIcon />,
      };
    default:
      return {
        label: status,
        icon: <PendingIcon />,
      };
  }
};

const headerClass =
  "flex items-center gap-2 text-muted-foreground font-inter font-medium text-[13px] leading-[18px] -tracking-[0.01em]";

const TranslatedHeader = ({
  columnKey,
  icon: Icon,
}: {
  columnKey: string;
  icon?: React.ComponentType<{ className?: string }>;
}) => {
  const t = useTranslations("Projects.columns");
  return (
    <div className={headerClass}>
      {Icon && <Icon className="w-3 h-3" />}
      <span>{t(columnKey)}</span>
    </div>
  );
};

const StatusCell = ({ status }: { status: string }) => {
  const t = useTranslations("Projects.status");
  const config = getStatusConfig(status, t);
  return (
    <div className="flex items-center gap-2 py-1">
      <div className="flex items-center justify-center w-4 h-4">
        {React.cloneElement(
          config.icon as React.ReactElement<{ className?: string }>,
          { className: "w-4 h-4" },
        )}
      </div>
      <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-foreground font-inter">
        {config.label}
      </span>
    </div>
  );
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: () => <TranslatedHeader columnKey="name" />,
    cell: ({ row }) => {
      const p = row.original;
      return (
        <div className="flex items-center gap-4 py-1">
          <div className="flex items-center justify-center">
            <ProjectFolderIcon />
          </div>
          <div className="flex flex-row gap-2">
            <span className="text-[14px] font-semibold leading-[20px] tracking-[-0.012em] text-foreground font-inter">
              {p.name}
            </span>
            <span className="text-[10px] leading-[16px] border border-border uppercase font-bold text-muted-foreground px-1 py-0.5 rounded-sm bg-muted/50">
              {p.projectId}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <TranslatedHeader columnKey="status" icon={StatusIcon} />,
    cell: ({ row }) => <StatusCell status={row.getValue("status") as string} />,
  },
  {
    accessorKey: "client",
    header: () => <TranslatedHeader columnKey="client" icon={ClientIcon} />,
    cell: ({ row }) => (
      <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-foreground/80 font-inter">
        {row.getValue("client")}
      </span>
    ),
  },
  {
    accessorKey: "assignees",
    header: () => <TranslatedHeader columnKey="assignee" icon={AssignIcon} />,
    cell: ({ row }) => {
      const assignees = row.getValue("assignees") as Project["assignees"];
      return (
        <div className="flex -space-x-2">
          {assignees.map((a, i) => (
            <Avatar key={i} className="h-7 w-7 border-2 border-background">
              <AvatarImage src={a.avatar} alt={a.name} />
              <AvatarFallback className="text-[10px] bg-muted text-muted-foreground font-bold">
                {a.name}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: () => (
      <TranslatedHeader columnKey="taskProgress" icon={TaskProgressIcon} />
    ),
    cell: ({ row }) => {
      const p = row.getValue("progress") as number;
      return (
        <div className="flex items-center gap-3 w-40">
          <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-foreground/80 font-inter min-w-[32px]">
            {p}%
          </span>
          <Progress value={p} className="h-1.5 bg-muted [&>div]:bg-primary" />
        </div>
      );
    },
  },
  {
    accessorKey: "budget",
    header: () => <TranslatedHeader columnKey="budgetLeft" icon={DollarIcon} />,
    cell: ({ row }) => (
      <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-foreground/80 font-inter">
        {row.getValue("budget")}
      </span>
    ),
  },
  {
    accessorKey: "dueDate",
    header: () => <TranslatedHeader columnKey="dueDate" icon={CalendarIcon} />,
    cell: ({ row }) => (
      <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-foreground/80 font-inter">
        {row.getValue("dueDate")}
      </span>
    ),
  },
];
