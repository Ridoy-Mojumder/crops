"use client"

import * as React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Folder } from "lucide-react"

const projects = [
    {
        id: "1234",
        name: "Timesquare Ads Videos",
        status: "In-progress",
        client: "Baseline",
        assignees: ["/avatars/user1.jpg", "/avatars/user2.jpg", "/avatars/user3.jpg"],
        progress: 70,
        budgetLeft: "$23,450",
        dueDate: "Apr 17, 2025",
        color: "bg-blue-500",
    },
    {
        id: "1235",
        name: "Social Media Campaign",
        status: "Post Production",
        client: "Urban Ads",
        assignees: ["/avatars/user1.jpg", "/avatars/user2.jpg", "/avatars/user4.jpg"],
        progress: 100,
        budgetLeft: "$15,200",
        dueDate: "Mar 12, 2025",
        color: "bg-blue-600",
    },
    {
        id: "1236",
        name: "Email Marketing Design",
        status: "Pending",
        client: "WebPromote",
        assignees: ["/avatars/user2.jpg", "/avatars/user3.jpg"],
        progress: 20,
        budgetLeft: "$5,000",
        dueDate: "Apr 30, 2025",
        color: "bg-blue-400",
    },
    {
        id: "1237",
        name: "Website Redesign",
        status: "In-progress",
        client: "Broadcast",
        assignees: ["/avatars/user1.jpg", "/avatars/user4.jpg"],
        progress: 40,
        budgetLeft: "$12,750",
        dueDate: "May 15, 2025",
        color: "bg-blue-500",
    },
    {
        id: "1238",
        name: "App Launch",
        status: "Planning",
        client: "VR Innovations",
        assignees: ["/avatars/user1.jpg", "/avatars/user2.jpg", "/avatars/user3.jpg"],
        progress: 100,
        budgetLeft: "$30,000",
        dueDate: "Feb 1, 2025",
        color: "bg-blue-600",
    },
    {
        id: "1239",
        name: "User Research Study",
        status: "Completed",
        client: "Zapier",
        assignees: ["/avatars/user3.jpg", "/avatars/user4.jpg"],
        progress: 60,
        budgetLeft: "$18,300",
        dueDate: "Jun 10, 2025",
        color: "bg-blue-500",
    },
    {
        id: "1240",
        name: "Content Strategy",
        status: "Planning",
        client: "Moonland",
        assignees: ["/avatars/user1.jpg", "/avatars/user2.jpg"],
        progress: 10,
        budgetLeft: "$8,500",
        dueDate: "Jul 5, 2025",
        color: "bg-blue-400",
    },
]

const StatusBadge = ({ status }: { status: string }) => {
    const getColors = () => {
        switch (status.toLowerCase()) {
            case "in-progress":
                return "border-blue-200 bg-blue-50 text-blue-700"
            case "post production":
                return "border-purple-200 bg-purple-50 text-purple-700"
            case "pending":
                return "border-zinc-200 bg-zinc-50 text-zinc-500"
            case "planning":
                return "border-pink-200 bg-pink-50 text-pink-700"
            case "completed":
                return "border-green-200 bg-green-50 text-green-700"
            default:
                return "border-zinc-200 bg-zinc-50 text-zinc-700"
        }
    }

    return (
        <div className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${getColors()}`}>
            <div className={`h-1.5 w-1.5 rounded-full bg-current opacity-40`} />
            {status}
        </div>
    )
}

export function ProjectsTable() {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <Table>
                <TableHeader className="bg-zinc-50/50">
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[300px] text-xs font-semibold uppercase tracking-wider text-zinc-500 py-4">Name</TableHead>
                        <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Status</TableHead>
                        <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Client</TableHead>
                        <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Assignee</TableHead>
                        <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">% Task Progress</TableHead>
                        <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">$ Budget Left</TableHead>
                        <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Due Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.id} className="group transition-colors hover:bg-zinc-50/70 border-zinc-100">
                            <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${project.color} text-white shadow-sm transition-transform group-hover:scale-105`}>
                                        <Folder className="h-5 w-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-zinc-900 group-hover:text-black">{project.name}</span>
                                        <span className="text-[10px] font-medium text-zinc-400">ID #{project.id}</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <StatusBadge status={project.status} />
                            </TableCell>
                            <TableCell className="text-sm text-zinc-600 font-medium">{project.client}</TableCell>
                            <TableCell>
                                <div className="flex -space-x-2">
                                    {project.assignees.map((avatar, i) => (
                                        <Avatar key={i} className="h-7 w-7 border-2 border-white shadow-sm transition-transform hover:z-10 hover:scale-110 cursor-pointer">
                                            <AvatarImage src={avatar} />
                                            <AvatarFallback className="text-[10px] font-bold bg-zinc-100 uppercase">{String.fromCharCode(65 + i)}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                            </TableCell>
                            <TableCell className="w-[180px]">
                                <div className="flex items-center gap-2">
                                    <span className="w-8 text-[11px] font-bold text-zinc-500">{project.progress}%</span>
                                    <Progress value={project.progress} className="h-2 flex-1 bg-zinc-100" indicatorClassName="bg-emerald-500" />
                                </div>
                            </TableCell>
                            <TableCell className="text-sm font-bold text-zinc-900">{project.budgetLeft}</TableCell>
                            <TableCell className="text-sm font-medium text-zinc-500">{project.dueDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
