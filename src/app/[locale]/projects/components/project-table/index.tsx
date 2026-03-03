"use client";

import React from "react";
import DefaultTable from "@/components/table/DefaultTable";
import { Button } from "@/components/ui/button";
// import { ListIcon, GridIcon } from "lucide-react";

import { data } from "./data";
import { columns } from "./columns";

import PlusIcon from "@/components/svg/PlusIcon";
import FilterIcon from "@/components/svg/FilterIcon";
import SortIcon from "@/components/svg/SortIcon";
import SearchIcon from "@/components/svg/SearchIcon";

import { useTranslations } from "next-intl";

export default function ProjectTable() {
  const tCommon = useTranslations("Common");
  const tProjects = useTranslations("Projects");

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-border p-3 bg-card gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
            <Button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors max-w-[88px] bg-background w-full border border-border shadow-sm">
              <FilterIcon className="h-4 w-4" />
              <span>{tCommon("filters")}</span>
            </Button>
            <Button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors max-w-[88px] bg-background w-full border border-border shadow-sm">
              <SortIcon className="h-4 w-4" />
              <span>{tCommon("sort")}</span>
            </Button>
            <div className="relative flex-1 sm:flex-none flex items-center max-w-[120px] bg-background w-full border border-border rounded-lg shadow-sm">
              <SearchIcon className="absolute left-3 h-4 w-4 text-muted-foreground/60" />
              <input
                type="text"
                placeholder={tCommon("search")}
                className="pl-9 pr-4 py-1.5 text-sm bg-transparent w-full max-w-[120px] border-none rounded-lg focus:ring-0 text-foreground"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 border border-primary text-primary-foreground flex items-center justify-center gap-2 px-5 h-10 rounded-[8px] transition-colors shadow-sm">
              <PlusIcon className="h-4 w-4" />
              <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em]">
                {tProjects("createProject")}
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            <DefaultTable data={data} columns={columns}>
              <DefaultTable.Table
                headerClassName="bg-muted/30 border-b border-border"
                headerRowClassName="h-10 text-muted-foreground font-bold text-[10px] tracking-wider"
                getRowClassName={() =>
                  "hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0"
                }
              />
            </DefaultTable>
          </div>
        </div>
      </div>
    </div>
  );
}
