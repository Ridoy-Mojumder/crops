import { Project } from "./types";

export const data: Project[] = [
    {
        id: "1",
        projectId: "#1234",
        name: "Timesquare Ads Videos",
        status: "In-progress",
        client: "Baseline",
        assignees: [
            { name: "A", avatar: "/Avaters/avater-1.png" },
            { name: "B", avatar: "/Avaters/avater-2.png" },
            { name: "C", avatar: "/Avaters/avater-3.png" }
        ],
        progress: 70,
        budget: "$23,450",
        dueDate: "Apr 17, 2025",
        iconColor: "bg-blue-600",
    },
    {
        id: "2",
        projectId: "#1235",
        name: "Social Media Campaign",
        status: "Post Production",
        client: "Urban Ads",
        assignees: [
            { name: "A", avatar: "/Avaters/avater-1.png" },
            { name: "B", avatar: "/Avaters/avater-4.png" },
            { name: "C", avatar: "/Avaters/avater-3.png" }
        ],
        progress: 100,
        budget: "$15,200",
        dueDate: "Mar 12, 2025",
        iconColor: "bg-blue-600",
    },
    {
        id: "3",
        projectId: "#1236",
        name: "Email Marketing Design",
        status: "Pending",
        client: "WebPromote",
        assignees: [
            { name: "A", avatar: "/Avaters/avater-2.png" },
            { name: "R", avatar: "/Avaters/avater-4.png" }
        ],
        progress: 20,
        budget: "$5,000",
        dueDate: "Apr 30, 2025",
        iconColor: "bg-blue-500",
    },
    {
        id: "4",
        projectId: "#1237",
        name: "Website Redesign",
        status: "In-progress",
        client: "Broadcast",
        assignees: [
            { name: "A", avatar: "/Avaters/avater-1.png" },
            { name: "R", avatar: "/Avaters/avater-3.png" }
        ],
        progress: 40,
        budget: "$12,750",
        dueDate: "May 15, 2025",
        iconColor: "bg-blue-500",
    },
    {
        id: "5",
        projectId: "#1238",
        name: "App Launch",
        status: "Planning",
        client: "VR Innovations",
        assignees: [
            { name: "A", avatar: "/Avaters/avater-1.png" },
            { name: "B", avatar: "/Avaters/avater-2.png" },
            { name: "C", avatar: "/Avaters/avater-4.png" }
        ],
        progress: 100,
        budget: "$30,000",
        dueDate: "Feb 1, 2025",
        iconColor: "bg-blue-500",
    },
    {
        id: "6",
        projectId: "#1239",
        name: "User Research Study",
        status: "Completed",
        client: "Zapier",
        assignees: [
            { name: "A", avatar: "/Avaters/avater-3.png" },
            { name: "B", avatar: "/Avaters/avater-1.png" }
        ],
        progress: 60,
        budget: "$18,300",
        dueDate: "Jun 10, 2025",
        iconColor: "bg-blue-500",
    },
    {
        id: "7",
        projectId: "#1240",
        name: "Content Strategy",
        status: "Planning",
        client: "Moonland",
        assignees: [
            { name: "A", avatar: "/Avaters/avater-2.png" },
            { name: "B", avatar: "/Avaters/avater-4.png" }
        ],
        progress: 10,
        budget: "$8,500",
        dueDate: "Jul 5, 2025",
        iconColor: "bg-blue-500",
    },
];
