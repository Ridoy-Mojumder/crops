import { ProjectsTable } from "@/components/projects-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Plus, Filter, ArrowUpDown, Search, Grid, List } from "lucide-react"

export default function Home() {
  return (
    <div className="flex-1 space-y-8 p-10 pt-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Projects</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 rounded-lg shadow-sm">
            <Plus className="mr-2 h-4 w-4" />
            Create project
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between bg-white rounded-xl border border-zinc-200 p-2 shadow-sm">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 px-4 text-zinc-600 font-medium hover:bg-zinc-50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>By Status</DropdownMenuItem>
                <DropdownMenuItem>By Client</DropdownMenuItem>
                <DropdownMenuItem>By Assignee</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 px-4 text-zinc-600 font-medium hover:bg-zinc-50">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>Date Created</DropdownMenuItem>
                <DropdownMenuItem>Alphabetical</DropdownMenuItem>
                <DropdownMenuItem>Progress</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative ml-2">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <Input
                placeholder="Search"
                className="h-9 w-[280px] bg-zinc-50 border-none pl-9 text-sm focus-visible:ring-1 focus-visible:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 border-l border-zinc-100 pl-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-md">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md">
              <Grid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ProjectsTable />
      </div>
    </div>
  );
}
