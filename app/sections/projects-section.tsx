import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/Tabs";
import Websitesgird from "@/app/sections/websites-grid";
import MobileGrid from "@/app/sections/mobile-grid";

const tabs=["Websites","Mobile apps","Backends","Bots","Tools"]
const DefaultSection = () => {
    const [value, setValue] = useState<string>("Websites");
    const [direction,setDirection]= useState<'left' | 'right'>('left')
    const handleChange = (v: string) => {
        setValue(v);
        if(tabs.indexOf(v) > tabs.indexOf(value)){
            setDirection('left')
        }else{
            setDirection('right')
        }
    };

    const tabcontent = () => {
        switch (value) {
            case tabs[0]:
                return <Websitesgird />;
            case tabs[1]:
                return <MobileGrid/>;
            case tabs[2]:
                return <p>Backends content here.</p>;
            case tabs[3]:
                return <p>Bots content here.</p>;
            case tabs[4]:
                return <p>Tools content here.</p>;
            default:
                return null;
        }
    };

    return (
        <section id="1" className="flex justify-center w-full items-center text-center">

            <Tabs defaultValue="Websites" onValueChange={handleChange}>
                <motion.div

                    exit={{y:'-100%'}}
                >
                    <TabsList className="bg-neutral-900">
                        <TabsTrigger value={tabs[0]}>{tabs[0]}</TabsTrigger>
                        <TabsTrigger value={tabs[1]}>{tabs[1]}</TabsTrigger>
                        <TabsTrigger value={tabs[2]}>{tabs[2]}</TabsTrigger>
                        <TabsTrigger value={tabs[3]}>{tabs[3]}</TabsTrigger>
                        <TabsTrigger value={tabs[4]}>{tabs[4]}</TabsTrigger>
                    </TabsList>
                </motion.div>


                <motion.div
                    key={value}
                    initial={{x: direction === 'left'  ?  -500 : 500}}
                    animate={{x: 0}}
                    exit={{y: -500}}
                    transition={{duration: 0.3}}
                >
                    <TabsContent value={value}>{tabcontent()}</TabsContent>
                </motion.div>

            </Tabs>
        </section>
    );
};

export default DefaultSection;
