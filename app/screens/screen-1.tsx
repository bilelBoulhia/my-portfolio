import OverviewSection from "@/app/sections/overview-section";
import SkillSection from "@/app/sections/skills-section";
import React from "react";

const Screen = ()=>{
    return (
        <section className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
            <div className='min-h-[50vh] w-full '>
                <OverviewSection/>
            </div>
            <div className='min-h-[30vh] w-full'>
                <SkillSection/>
            </div>
        </section>
    )
}
export default Screen;