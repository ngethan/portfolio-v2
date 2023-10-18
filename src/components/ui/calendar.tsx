"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                    buttonVariants({ variant: "outline" }),
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                ),
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell:
                    "text-primary-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-primary-400",
                row: "flex w-full mt-2",
                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-primary-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected])]:bg-primary-800",
                day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                ),
                day_selected:
                    "bg-primary-900 text-primary-50 hover:bg-primary-900 hover:text-primary-50 focus:bg-primary-900 focus:text-primary-50 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50 dark:hover:text-primary-900 dark:focus:bg-primary-50 dark:focus:text-primary-900",
                day_today:
                    "bg-primary-100 text-primary-900 dark:bg-primary-800 dark:text-primary-50",
                day_outside:
                    "text-primary-500 opacity-50 dark:text-primary-400",
                day_disabled:
                    "text-primary-500 opacity-50 dark:text-primary-400",
                day_range_middle:
                    "aria-selected:bg-primary-100 aria-selected:text-primary-900 dark:aria-selected:bg-primary-800 dark:aria-selected:text-primary-50",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => (
                    <ChevronRight className="h-4 w-4" />
                ),
            }}
            {...props}
        />
    );
}
Calendar.displayName = "Calendar";

export { Calendar };
