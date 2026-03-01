"use client";

import * as React from "react";
import { menuConfig } from "@/config/menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DownArrowIcon from "./svg/DownArrow";
import PlusIcon from "./svg/PlusIcon";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { navMain, secondaryNav, user } = menuConfig;
    const pathname = usePathname();

    return (
        <Sidebar
            collapsible="icon"
            {...props}
            className="border-r border-zinc-200 bg-white"
        >
            <SidebarHeader className="h-16 flex items-center px-6">
                <div className="flex items-center gap-2 font-semibold text-xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                        <Image src="/Logo/logo.png" alt="Logo" width={24} height={24} className="rounded-[4px]" />
                    </div>
                    <span className="tracking-tight group-data-[collapsible=icon]:hidden">
                        Basecom
                    </span>
                    <DownArrowIcon className="ml-auto h-4 w-4 text-zinc-400 group-data-[collapsible=icon]:hidden" />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {navMain.map((item) => {
                            const isActive = pathname === item.url;
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2 transition-colors font-inter group-data-[collapsible=icon]:px-2",
                                            "text-[14px] font-medium leading-[20px] -tracking-[0.01em]",
                                            "text-gray-800", // Always gray-800
                                            isActive ? "bg-gray-50" : "hover:bg-zinc-50"
                                        )}
                                    >
                                        <Link href={item.url}>
                                            <item.icon
                                                className={cn(
                                                    "w-4 h-4", // 16px x 16px
                                                    isActive ? "text-gray-800" : "text-gray-600"
                                                )}
                                            />
                                            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarGroup>

                <div className="px-4 mt-6 group-data-[collapsible=icon]:hidden">
                    <button className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-all shadow-sm">
                        <div className="flex items-center gap-2 text-gray-800">
                            <PlusIcon className="h-4 w-4" />
                            <span className="text-[14px] leading-[20px]">Create</span>
                        </div>
                        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-zinc-50 px-1.5 font-mono text-[10px] font-medium text-zinc-500 opacity-100 sm:flex">
                            <span className="text-xs">⌘</span>P
                        </kbd>
                    </button>
                </div>
            </SidebarContent>
            <SidebarFooter className="p-4 bg-white">
                <SidebarMenu>
                    {secondaryNav.map((item) => {
                        const isActive = pathname === item.url;
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActive}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 transition-colors font-inter group-data-[collapsible=icon]:px-2",
                                        "text-[14px] font-medium leading-[20px] -tracking-[0.01em]",
                                        "text-gray-800",
                                        isActive ? "bg-gray-50" : "hover:bg-zinc-50"
                                    )}
                                >
                                    <Link href={item.url}>
                                        <item.icon
                                            className={cn(
                                                "w-4 h-4",
                                                isActive ? "text-gray-800" : "text-gray-600"
                                            )}
                                        />
                                        <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                    <SidebarSeparator className="my-4" />
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="px-2 hover:bg-zinc-50 transition-colors"
                        >
                            <Avatar className="h-8 w-8 rounded-full border border-zinc-200">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="rounded-full bg-zinc-100 text-zinc-600">
                                    {user.name
                                        ?.split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start text-xs font-semibold text-gray-800 group-data-[collapsible=icon]:hidden ml-2">
                                <span className="truncate">{user.name}</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
