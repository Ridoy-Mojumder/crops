"use client"

import * as React from "react"
import {
    LayoutDashboard,
    FolderOpen,
    CheckCircle2,
    Users2,
    Users,
    Box,
    Clock,
    CircleDollarSign,
    Plus,
    HelpCircle,
    Settings,
    ChevronRight,
    ChevronDown,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const data = {
    user: {
        name: "Anna Grzybowski",
        email: "anna@example.com",
        avatar: "/avatars/anna.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Projects",
            url: "#",
            icon: FolderOpen,
        },
        {
            title: "Tasks",
            url: "#",
            icon: CheckCircle2,
        },
        {
            title: "Clients",
            url: "#",
            icon: Users2,
        },
        {
            title: "Team",
            url: "#",
            icon: Users,
        },
        {
            title: "Resources",
            url: "#",
            icon: Box,
        },
        {
            title: "Timesheet",
            url: "#",
            icon: Clock,
        },
        {
            title: "Finance",
            url: "#",
            icon: CircleDollarSign,
        },
    ],
    secondaryNav: [
        {
            title: "Getting Started",
            url: "#",
            icon: HelpCircle,
        },
        {
            title: "Admin Settings",
            url: "#",
            icon: Settings,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props} className="border-r border-zinc-200">
            <SidebarHeader className="h-16 flex items-center px-6">
                <div className="flex items-center gap-2 font-semibold text-xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                        <Box className="h-5 w-5" />
                    </div>
                    <span className="tracking-tight">Basecom</span>
                    <ChevronDown className="ml-auto h-4 w-4 text-zinc-400" />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={item.isActive}
                                    className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${item.isActive
                                            ? "bg-zinc-100 text-black hover:bg-zinc-100"
                                            : "text-zinc-600 hover:bg-zinc-50 hover:text-black"
                                        }`}
                                >
                                    <a href={item.url}>
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                <div className="px-4 mt-4">
                    <button className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-all shadow-sm">
                        <div className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            <span>Create</span>
                        </div>
                        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-zinc-50 px-1.5 font-mono text-[10px] font-medium text-zinc-500 opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>P
                        </kbd>
                    </button>
                </div>
            </SidebarContent>
            <SidebarFooter className="border-t border-zinc-200 p-4">
                <SidebarMenu>
                    {data.secondaryNav.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-black transition-colors"
                            >
                                <a href={item.url}>
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <SidebarSeparator className="my-2" />
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="flex items-center gap-3 px-2 text-zinc-600 hover:bg-zinc-50 transition-colors"
                        >
                            <Avatar className="h-8 w-8 rounded-full">
                                <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                <AvatarFallback className="rounded-full bg-zinc-100 text-zinc-600">
                                    {data.user.name.split(" ").map((n) => n[0]).join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start text-xs font-semibold text-black">
                                <span className="truncate">{data.user.name}</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
