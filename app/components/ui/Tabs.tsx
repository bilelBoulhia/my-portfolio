"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { m} from "motion/react"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>

>(({ className, ...props }, ref) => (
    <m.div
        exit={{y:'-200%'}}
        transition={{duration:0.1,ease:'linear'}}
    >


    <TabsPrimitive.List
        ref={ref}
        className={cn(
            "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
            className
        )}
        {...props}
    />
    </m.div>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            "inline-flex items-center  justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-neutral-600  data-[state=active]:text-foreground data-[state=active]:shadow",
            className
        )}
        {...props}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
    React.ComponentRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (

    <m.div
        exit={{x:'-200%'}}
        transition={{duration:0.3,ease:'linear'}}
    >
        <TabsPrimitive.Content
            ref={ref}
            className={cn(
                "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                className
            )}
            {...props}
        />
    </m.div>


))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
