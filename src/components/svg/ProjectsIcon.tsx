import React from "react";

export default function ProjectsIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2.66665 13.3333H13.3333C13.6869 13.3333 14.0261 13.1929 14.2761 12.9428C14.5262 12.6928 14.6666 12.3536 14.6666 12V5.33333C14.6666 4.97971 14.5262 4.64057 14.2761 4.39052C14.0261 4.14048 13.6869 4 13.3333 4H8.04665C7.82704 3.99886 7.61111 3.9435 7.41805 3.83883C7.22498 3.73415 7.06076 3.58341 6.93998 3.4L6.39331 2.6C6.27253 2.41659 6.10831 2.26585 5.91525 2.16117C5.72218 2.0565 5.50626 2.00114 5.28665 2H2.66665C2.31302 2 1.97389 2.14048 1.72384 2.39052C1.47379 2.64057 1.33331 2.97971 1.33331 3.33333V12C1.33331 12.7333 1.93331 13.3333 2.66665 13.3333Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.33331 6.66663V9.33329"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 6.66663V7.99996"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.6667 6.66663V10.6666"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
