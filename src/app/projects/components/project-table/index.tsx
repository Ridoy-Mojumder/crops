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

export default function ProjectTable() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border border-zinc-100 p-3 bg-white gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
            <Button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-zinc-50 rounded-lg transition-colors max-w-[88px] bg-white w-full border border-gray-100 rounded-lg shadow-sm">
              <FilterIcon className="h-4 w-4" />
              <span>Filters</span>
            </Button>
            <Button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-zinc-50 rounded-lg transition-colors max-w-[88px] bg-white w-full border border-gray-100 rounded-lg shadow-sm">
              <SortIcon className="h-4 w-4" />
              <span>Sort</span>
            </Button>
            <div className="relative flex-1 sm:flex-none flex items-center max-w-[120px] bg-white w-full border border-gray-100 rounded-lg shadow-sm">
              <SearchIcon className="absolute left-3 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-1.5 text-sm bg-white w-full max-w-[120px] border-none rounded-lg focus:ring-0 text-zinc-600"
              />
            </div>
          </div>
          {/* <div className="flex items-center gap-2 justify-end pr-1">
            <div className="p-1 bg-green-50 text-green-600 rounded-lg border border-green-100">
              <ListIcon className="h-4 w-4" />
            </div>
            <div className="p-1 text-zinc-400 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors">
              <GridIcon className="h-4 w-4" />
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Button className="w-full sm:w-auto bg-[#009862] hover:bg-[#008554] border border-[#006642] text-white flex items-center justify-center gap-2 px-5 h-10 rounded-[8px] transition-colors shadow-sm">
              <PlusIcon className="h-4 w-4" />
              <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em]">
                Create project
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            <DefaultTable data={data} columns={columns}>
              <DefaultTable.Table
                headerClassName="bg-white border-b border-zinc-100"
                headerRowClassName="h-10 text-zinc-400 font-bold text-[10px] tracking-wider"
                getRowClassName={() => "hover:bg-zinc-50/50 transition-colors"}
              />
            </DefaultTable>
          </div>
        </div>
      </div>
    </div>
  );
}
