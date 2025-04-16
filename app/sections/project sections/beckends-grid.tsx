import {ProjectCardDefault} from "@/app/components/ui/project-card";
import {backendProjects} from "@/app/constants";
export default function BackendGrid(){
    return(
        <div

            className='flex gap-5 flex-wrap items-center justify-center w-full'>
            {backendProjects.map((p,i)=>(
                <ProjectCardDefault ProjectCardContent={p} index={i} />
            ))}
        </div>
    )
}