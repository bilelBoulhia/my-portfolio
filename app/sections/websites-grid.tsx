import {projectList} from "@/app/constants";
import {ProjectCard} from "@/app/components/ui/project-card";
import React from "react";

export default function Websitesgird(){
    return (
        <section  className="flex flex-wrap w-full items-center justify-center gap-5 ">
            {projectList.map((project , i) => (
                <ProjectCard index={i} ProjectCardContent={project}/>
            ))}
        </section>
    )
}