"use client";

import React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { USFlag, DEFlag, NLFlag } from "@/components/svg/FlagIcons";
import { ChevronDown } from "lucide-react";

const languages = [
  {
    code: "en",
    name: "EN",
    fullName: "English",
    Flag: USFlag,
  },
  {
    code: "de",
    name: "DE",
    fullName: "Deutsch",
    Flag: DEFlag,
  },
  {
    code: "nl",
    name: "NL",
    fullName: "Nederlands",
    Flag: NLFlag,
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as "en" | "de" | "nl" });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20">
        <div className="w-5 h-3.5 overflow-hidden rounded-sm flex-shrink-0">
          <currentLanguage.Flag className="w-full h-full object-cover" />
        </div>
        <span className="uppercase">{currentLanguage.name}</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 p-1 bg-popover border border-border rounded-lg shadow-lg"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors ${
              locale === lang.code
                ? "bg-primary/10 text-primary font-semibold"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <div className="w-5 h-3.5 overflow-hidden rounded-sm flex-shrink-0">
              <lang.Flag className="w-full h-full object-cover" />
            </div>
            <span>{lang.fullName}</span>
            {locale === lang.code && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
