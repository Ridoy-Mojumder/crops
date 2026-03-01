import React from "react";

export default function PendingIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <mask id="path-1-inside-1_45_2468" fill="white">
                <path d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM4.00199 10C4.00199 13.3126 6.68739 15.998 10 15.998C13.3126 15.998 15.998 13.3126 15.998 10C15.998 6.68739 13.3126 4.00199 10 4.00199C6.68739 4.00199 4.00199 6.68739 4.00199 10Z" />
            </mask>
            <path
                d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM4.00199 10C4.00199 13.3126 6.68739 15.998 10 15.998C13.3126 15.998 15.998 13.3126 15.998 10C15.998 6.68739 13.3126 4.00199 10 4.00199C6.68739 4.00199 4.00199 6.68739 4.00199 10Z"
                stroke="#87909F"
                strokeWidth="2"
                strokeMiterlimit="16"
                strokeDasharray="3 3"
                mask="url(#path-1-inside-1_45_2468)"
            />
        </svg>
    );
}
