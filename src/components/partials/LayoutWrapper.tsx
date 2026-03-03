"use client";

import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/partials/Header";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
