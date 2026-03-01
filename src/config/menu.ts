import DashboardIcon from "@/components/svg/DashboardIcon";
import ProjectsIcon from "@/components/svg/ProjectsIcon";
import TasksIcon from "@/components/svg/TasksIcon";
import ClientsIcon from "@/components/svg/ClientsIcon";
import TeamIcon from "@/components/svg/TeamIcon";
import ResourcesIcon from "@/components/svg/ResourcesIcon";
import TimesheetIcon from "@/components/svg/TimesheetIcon";
import FinanceIcon from "@/components/svg/FinanceIcon";
import { HelpCircle, Settings } from "lucide-react";

export interface NavItem {
    title: string;
    url: string;
    icon: any;
    isActive?: boolean;
}

export interface MenuConfig {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
    navMain: NavItem[];
    secondaryNav: NavItem[];
}

export const menuConfig: MenuConfig = {
    user: {
        name: "Anna Grzybowski",
        email: "anna@example.com",
        avatar: "/Avaters/avater-1.png",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: DashboardIcon,
        },
        {
            title: "Projects",
            url: "/projects",
            icon: ProjectsIcon,
        },
        {
            title: "Tasks",
            url: "/tasks",
            icon: TasksIcon,
        },
        {
            title: "Clients",
            url: "/clients",
            icon: ClientsIcon,
        },
        {
            title: "Team",
            url: "/team",
            icon: TeamIcon,
        },
        {
            title: "Resources",
            url: "/resources",
            icon: ResourcesIcon,
        },
        {
            title: "Timesheet",
            url: "/timesheet",
            icon: TimesheetIcon,
        },
        {
            title: "Finance",
            url: "/finance",
            icon: FinanceIcon,
        },
    ],
    secondaryNav: [
        {
            title: "Getting Started",
            url: "/docs",
            icon: HelpCircle,
        },
        {
            title: "Admin Settings",
            url: "/settings/admin",
            icon: Settings,
        },
    ],
};

export const userConfig = menuConfig.user;
