"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";


import {
    BarChart2 ,
    Award ,
    StickyNote  ,
    ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";

export default function SideNavbar({ }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        
        <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
            
            {!mobileWidth && (
                <div className="absolute right-[-20px] top-7">
                    <Button
                        onClick={toggleSidebar}
                        variant="secondary"
                        className=" rounded-full p-2"
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/dash",
                        icon: BarChart2 ,
                        variant: "default"
                    },
                    {
                        title: "Skill Test",
                        href: "/skill",
                        icon: Award ,
                        variant: "ghost"
                    },
                    {
                        title: "Internship",
                        href: "/intern",
                        icon: StickyNote  ,
                        variant: "ghost"
                    },
                    
                ]}
            />
        </div>
    );
}