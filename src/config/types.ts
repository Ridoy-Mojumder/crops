import { LucideIcon } from "lucide-react";

export type TMenuTranslationFunction = (key: string) => string;

export interface INavItem {
    title: string;
    url: string;
    isActive?: boolean;
}

export interface INavGroupItem {
    title: string;
    url: string;
    icon: LucideIcon | React.ComponentType<{ className?: string }>;
    isActive?: boolean;
    items?: INavItem[];
}
