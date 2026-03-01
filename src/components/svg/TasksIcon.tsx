import React from "react";

export default function TasksIcon(props: React.ComponentProps<"svg">) {
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
                d="M14.6666 8H10.6666L9.33331 10H6.66665L5.33331 8H1.33331"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.63331 3.40663L1.33331 7.99996V12C1.33331 12.3536 1.47379 12.6927 1.72384 12.9428C1.97389 13.1928 2.31302 13.3333 2.66665 13.3333H13.3333C13.6869 13.3333 14.0261 13.1928 14.2761 12.9428C14.5262 12.6927 14.6666 12.3536 14.6666 12V7.99996L12.3666 3.40663C12.2563 3.18448 12.0861 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1733 2.66663H4.82665C4.57859 2.66676 4.33549 2.73608 4.12468 2.86681C3.91386 2.99754 3.7437 3.18448 3.63331 3.40663Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
