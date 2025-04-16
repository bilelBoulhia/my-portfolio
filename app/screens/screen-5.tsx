import OverviewSection from "@/app/sections/overview-section";
import SkillSection from "@/app/sections/skills-section";
import React from "react";
import ContactSection from "@/app/sections/contact-section";

const Screen = ()=>{
    return (
        <section className="w-full min-h-screen flex  flex-col gap-10 items-center  justify-evenly   ">
            <ContactSection/>
        </section>
    )
}
export default Screen;