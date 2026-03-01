export interface Project {
    id: string;
    projectId: string;
    name: string;
    status: string;
    client: string;
    assignees: {
        name: string;
        avatar?: string;
    }[];
    progress: number;
    budget: string;
    dueDate: string;
    iconColor: string;
}
