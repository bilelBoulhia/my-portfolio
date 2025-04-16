import {ProjectCardDefault} from "@/app/components/ui/project-card";
import {ToolsProjects} from "@/app/constants";
export default function ToolsGrid(){
    return(
        <div

            className='flex gap-5 flex-wrap items-center justify-center w-full'>
            {ToolsProjects.map((p,i)=>(
                <ProjectCardDefault ProjectCardContent={p} index={i} />
            ))}
        </div>
    )
}