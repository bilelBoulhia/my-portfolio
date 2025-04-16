import {ProjectCardPhone} from "@/app/components/ui/project-card";
import {MobilePorjectsList} from "@/app/constants";
export default function MobileGrid(){
    return(
        <div
            className='flex flex-wrap items-center justify-center w-full'>
            {MobilePorjectsList.map((p,i)=>(
                <ProjectCardPhone ProjectCardContent={p} index={i} />
            ))}
        </div>
    )
}