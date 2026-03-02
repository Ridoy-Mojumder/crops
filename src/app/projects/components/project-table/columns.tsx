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

const getStatusConfig = (status: string) => {
  switch (status.toLowerCase()) {
    case "in-progress":
      return {
        label: "In-progress",
        icon: <InProgressIcon />,
      };
    case "completed":
      return {
        label: "Completed",
        icon: <CompleteIcon />,
      };
    case "pending":
      return {
        label: "Pending",
        icon: <PendingIcon />,
      };
    case "planning":
      return {
        label: "Planning",
        icon: <PlanningIcon />,
      };
    case "post production":
      return {
        label: "Post Production",
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
  "flex items-center gap-2 text-[#4E5564] font-inter font-medium text-[13px] leading-[18px] -tracking-[0.01em]";

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className={headerClass}>
        <span>Name</span>
      </div>
    ),
    cell: ({ row }) => {
      const p = row.original;
      return (
        <div className="flex items-center gap-4 py-1">
          <div className="flex items-center justify-center">
            <ProjectFolderIcon />
          </div>
          <div className="flex flex-row gap-2">
            <span className="text-[14px] font-semibold leading-[20px] tracking-[-0.012em] text-gray-900 font-inter">
              {p.name}
            </span>
            <span className="text-[10px] leading-[16px] border border-gray-100 uppercase font-bold text-gray-500 px-1 py-0.5 rounded-sm bg-gray-50">
              {p.projectId}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className={headerClass}>
        <StatusIcon className="w-3 h-3" />
        <span>Status</span>
      </div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const config = getStatusConfig(status);
      return (
        <div className="flex items-center gap-2 py-1">
          <div className="flex items-center justify-center w-4 h-4">
            {React.cloneElement(
              config.icon as React.ReactElement<{ className?: string }>,
              { className: "w-4 h-4" },
            )}
          </div>
          <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-gray-800 font-inter">
            {config.label}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "client",
    header: () => (
      <div className={headerClass}>
        <ClientIcon className="w-3 h-3" />
        <span>Client</span>
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-gray-700 font-inter">
        {row.getValue("client")}
      </span>
    ),
  },
  {
    accessorKey: "assignees",
    header: () => (
      <div className={headerClass}>
        <AssignIcon className="w-3 h-3" />
        <span>Assignee</span>
      </div>
    ),
    cell: ({ row }) => {
      const assignees = row.getValue("assignees") as Project["assignees"];
      return (
        <div className="flex -space-x-2">
          {assignees.map((a, i) => (
            <Avatar key={i} className="h-7 w-7 border-2 border-white">
              <AvatarImage src={a.avatar} alt={a.name} />
              <AvatarFallback className="text-[10px] bg-zinc-100 text-zinc-600 font-bold">
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
      <div className={headerClass}>
        <TaskProgressIcon className="w-3 h-3" />
        <span>Task Progress</span>
      </div>
    ),
    cell: ({ row }) => {
      const p = row.getValue("progress") as number;
      return (
        <div className="flex items-center gap-3 w-40">
          <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-gray-700 font-inter min-w-[32px]">
            {p}%
          </span>
          <Progress
            value={p}
            className="h-1.5 bg-zinc-100 [&>div]:bg-green-500"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "budget",
    header: () => (
      <div className={headerClass}>
        <DollarIcon className="w-3 h-3" />
        <span>Budget Left</span>
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-gray-700 font-inter">
        {row.getValue("budget")}
      </span>
    ),
  },
  {
    accessorKey: "dueDate",
    header: () => (
      <div className={headerClass}>
        <CalendarIcon className="w-3 h-3" />
        <span>Due Date</span>
      </div>
    ),
    cell: ({ row }) => (
      <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em] text-gray-700 font-inter">
        {row.getValue("dueDate")}
      </span>
    ),
  },
];
