"use client";

import React from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Settings, User, LogOut, Bell, Search } from "lucide-react";
import { userConfig } from "@/config/menu";

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 sm:px-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div className="hidden items-center gap-2 md:flex">
                    <Menubar className="border-none bg-transparent shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer">File</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Project <MenubarShortcut>⌘N</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>New Task</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Import</MenubarItem>
                                <MenubarItem>Export</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer">Edit</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>Undo</MenubarItem>
                                <MenubarItem>Redo</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer">View</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>Board View</MenubarItem>
                                <MenubarItem>Table View</MenubarItem>
                                <MenubarItem>Gantt Chart</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative hidden items-center sm:flex">
                    <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search projects..."
                        className="h-9 w-64 rounded-md border border-input bg-background pl-8 pr-3 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                </div>

                <button className="relative rounded-full p-2 hover:bg-muted transition-colors">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
                </button>

                <Menubar className="border-none bg-transparent shadow-none">
                    <MenubarMenu>
                        <MenubarTrigger className="cursor-pointer rounded-full p-0 h-8 w-8 overflow-hidden border">
                            <img
                                src={userConfig.avatar}
                                alt={userConfig.name}
                                className="h-full w-full object-cover"
                            />
                        </MenubarTrigger>
                        <MenubarContent align="end">
                            <MenubarItem className="flex items-center gap-2">
                                <User className="h-4 w-4" /> Profile
                            </MenubarItem>
                            <MenubarItem className="flex items-center gap-2">
                                <Settings className="h-4 w-4" /> Settings
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className="flex items-center gap-2 text-red-600 focus:text-red-600">
                                <LogOut className="h-4 w-4" /> Log out
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}
