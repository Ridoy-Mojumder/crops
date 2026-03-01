import React from "react";

export default function SortIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M2 10.6666L4.66667 13.3333L7.33333 10.6666" stroke="#4E5564" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66663 13.3333V2.66663" stroke="#4E5564" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.33337 2.66663H14" stroke="#4E5564" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.33337 5.33337H12" stroke="#4E5564" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.33337 8H10" stroke="#4E5564" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
