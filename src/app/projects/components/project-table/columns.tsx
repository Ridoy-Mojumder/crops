"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Project } from "./types";
import { Badge } from "@/components/ui/badge";
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
                className: "bg-blue-50 border-blue-200 text-[#036AA2]",
            };
        case "completed":
            return {
                label: "Completed",
                icon: <CompleteIcon />,
                className: "bg-green-50 border-green-200 text-[#009862]",
            };
        case "pending":
            return {
                label: "Pending",
                icon: <PendingIcon />,
                className: "bg-gray-50 border-gray-200 text-gray-700",
            };
        case "planning":
            return {
                label: "Planning",
                icon: <PlanningIcon />,
                className: "bg-pink-50 border-pink-200 text-[#D363A0]",
            };
        case "post production":
            return {
                label: "Post Production",
                icon: <PostProductionIcon />,
                className: "bg-purple-50 border-purple-200 text-[#7E22CF]",
            };
        default:
            return {
                label: status,
                icon: <PendingIcon />,
                className: "bg-gray-50 border-gray-200 text-gray-700",
            };
    }
};

const headerClass = "flex items-center gap-2 text-[#4E5564] font-inter font-medium text-[13px] leading-[18px] -tracking-[0.01em]";

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
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">{p.name}</span>
                        <span className="text-[10px] uppercase font-bold text-zinc-400">{p.projectId}</span>
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
                <Badge variant="outline" className={`px-2 py-0.5 rounded-full flex items-center gap-1.5 w-fit border-none shadow-none ${config.className}`}>
                    <div className="flex items-center justify-center w-4 h-4">
                        {React.cloneElement(config.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
                    </div>
                    <span className="text-[12px] font-medium leading-[20px]">{config.label}</span>
                </Badge>
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
        cell: ({ row }) => <span className="font-medium text-gray-600">{row.getValue("client")}</span>,
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
                    <span className="text-xs font-bold text-gray-800 min-w-[32px]">{p}%</span>
                    <Progress value={p} className="h-1.5 bg-zinc-100 [&>div]:bg-green-500" />
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
        cell: ({ row }) => <span className="font-bold text-gray-800">{row.getValue("budget")}</span>,
    },
    {
        accessorKey: "dueDate",
        header: () => (
            <div className={headerClass}>
                <CalendarIcon className="w-3 h-3" />
                <span>Due Date</span>
            </div>
        ),
        cell: ({ row }) => <span className="text-zinc-500 font-medium">{row.getValue("dueDate")}</span>,
    },
];
