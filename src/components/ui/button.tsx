import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { MdHorizontalRule } from "react-icons/md";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    `inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300 duration-300 font-mono`,
    {
        variants: {
            variant: {
                default:
                    "bg-transparent text-gray-50 border border-gray-400 hover:border-primary-500",
                destructive:
                    "bg-red-500 text-primary-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-primary-50 dark:hover:bg-red-900/90",
                ghost: "hover:bg-primary-100 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-50",
                link: "text-primary-900 underline-offset-4 hover:underline dark:text-primary-50",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-14 px-8",
                xl: "h-20 px-12",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    arrowAnimation?: boolean;
    childtext?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant, size, arrowAnimation, asChild = false, ...props },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (arrowAnimation) {
                        e.currentTarget.innerHTML = `<span class="mr-2">${props.childtext}</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>`;
                    }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (arrowAnimation) {
                        e.currentTarget.innerHTML = `<span class="mr-2">${props.childtext}</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="evenodd" d="M4 11h16v2H4z"></path></svg>`;
                    }
                }}
                {...props}
            >
                <span className={arrowAnimation ? "mr-2" : ""}>
                    {props.children}
                </span>
                {arrowAnimation && <MdHorizontalRule size={20} />}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
