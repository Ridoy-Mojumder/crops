"use client";

import React from "react";
import DefaultTable from "@/components/table/DefaultTable";
import { Button } from "@/components/ui/button";
import { ListIcon, GridIcon } from "lucide-react";

import { data } from "./data";
import { columns } from "./columns";

import PlusIcon from "@/components/svg/PlusIcon";
import FilterIcon from "@/components/svg/FilterIcon";
import SortIcon from "@/components/svg/SortIcon";
import SearchIcon from "@/components/svg/SearchIcon";

export default function ProjectTable() {
    return (
        <div className="p-4 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800 font-inter">Projects</h1>
                <Button className="w-full sm:w-auto bg-[#009862] hover:bg-[#008554] border border-[#006642] text-white flex items-center justify-center gap-2 px-5 h-10 rounded-[8px] transition-colors shadow-sm">
                    <PlusIcon className="h-4 w-4" />
                    <span className="text-[14px] font-medium leading-[20px] -tracking-[0.01em]">Create project</span>
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between border border-zinc-100 rounded-xl p-3 bg-white shadow-sm gap-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-zinc-50 rounded-lg transition-colors">
                        <FilterIcon className="h-4 w-4" />
                        <span>Filters</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-zinc-50 rounded-lg transition-colors">
                        <SortIcon className="h-4 w-4" />
                        <span>Sort</span>
                    </button>
                    <div className="hidden sm:block h-4 w-[1px] bg-zinc-200 mx-1"></div>
                    <div className="relative flex-1 sm:flex-none flex items-center min-w-[200px]">
                        <SearchIcon className="absolute left-3 h-4 w-4 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-4 py-1.5 text-sm bg-zinc-50 border-none rounded-lg focus:ring-0 w-full sm:w-64 text-zinc-600"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 justify-end pr-1">
                    <div className="p-1 bg-green-50 text-green-600 rounded-lg border border-green-100">
                        <ListIcon className="h-4 w-4" />
                    </div>
                    <div className="p-1 text-zinc-400 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors">
                        <GridIcon className="h-4 w-4" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden">
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
