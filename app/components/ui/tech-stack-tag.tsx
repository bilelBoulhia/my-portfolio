
import {ReactNode} from "react";
import {cn} from "@/lib/utils";



const TechStackTag =({stack,className}:{className?:string,stack:ReactNode})=>{

    return (
      <div className={cn(className,'size-8')}>
          <div>{stack}</div>
      </div>

    )
}

export default TechStackTag;