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
import { Button } from "./ui/button";

import { useTranslations } from "next-intl";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { navMain, secondaryNav, user } = menuConfig;
  const pathname = usePathname();
  const t = useTranslations("Common");

  // Helper to map menu titles to translation keys
  const getTranslationKey = (title: string) => {
    const mapping: Record<string, string> = {
      Dashboard: "dashboard",
      Projects: "projects",
      Tasks: "tasks",
      Clients: "clients",
      Team: "team",
      Resources: "resources",
      Timesheet: "timesheet",
      Finance: "finance",
      "Getting Started": "gettingStarted",
      "Admin Settings": "adminSettings",
    };
    return mapping[title] || title;
  };

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="border-r border-border bg-sidebar"
    >
      <SidebarHeader className="h-16 flex items-start px-6 group-data-[collapsible=icon]:px-3">
        <div className="flex items-center gap-2 font-semibold text-xl text-sidebar-foreground">
          <Image
            src="/Logo/logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="rounded-[4px]"
          />
          <span className="tracking-tight group-data-[collapsible=icon]:hidden">
            Basecom
          </span>
          <DownArrowIcon className="ml-auto h-4 w-4 group-data-[collapsible=icon]:hidden opacity-70" />
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
                      "text-sidebar-foreground",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "hover:bg-sidebar-accent/50",
                    )}
                  >
                    <Link href={item.url}>
                      <item.icon
                        className={cn(
                          "w-4 h-4",
                          isActive
                            ? "text-sidebar-accent-foreground"
                            : "text-sidebar-foreground/70",
                        )}
                      />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {t(getTranslationKey(item.title))}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        <div className="px-4 mt-6 group-data-[collapsible=icon]:hidden">
          <Button className="flex w-full items-center justify-between rounded-lg border border-dashed border-sidebar-border bg-sidebar-accent/50 px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-all shadow-none">
            <div className="flex items-center gap-2 text-sidebar-foreground">
              <PlusIcon className="h-4 w-4" />
              <span className="text-[14px] leading-[20px]">{t("create")}</span>
            </div>
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-sidebar-border bg-sidebar px-1.5 font-mono text-[11px] font-medium text-sidebar-foreground/50 opacity-100 sm:flex">
              <span className="">⌘</span>P
            </kbd>
          </Button>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-4 bg-sidebar">
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
                    "text-sidebar-foreground",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-accent/50",
                  )}
                >
                  <Link href={item.url}>
                    <item.icon
                      className={cn(
                        "w-4 h-4",
                        isActive
                          ? "text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/70",
                      )}
                    />
                    <span className="group-data-[collapsible=icon]:hidden">
                      {t(getTranslationKey(item.title))}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          <SidebarSeparator className="my-4" />
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="px-2 hover:bg-sidebar-accent transition-colors"
            >
              <Avatar className="h-8 w-8 rounded-full border border-sidebar-border">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-full bg-sidebar-accent text-sidebar-accent-foreground">
                  {user.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-xs font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden ml-2">
                <span className="truncate">{user.name}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
