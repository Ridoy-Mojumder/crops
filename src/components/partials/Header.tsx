"use client";

// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarTrigger,
// } from "@/components/ui/menubar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("Common");
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 sm:px-6 transition-colors">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <h1 className="text-[16px] font-semibold leading-[24px] tracking-[-0.015em] text-foreground font-inter">
          {t("projects")}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
