'use client'

import React from "react";

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/Card";

import {ArrowRight, Calendar} from "lucide-react";
import {Button} from "@/app/components/ui/button";
import {CodeSnippet} from "@/app/components/ui/code-snippet";
import {motion} from "motion/react";
import AnimatedHeader from "@/app/components/ui/animated-header";
import {gists} from "@/app/constants";
import {useMediaQuery} from "usehooks-ts";



const GistsSection = () => {


    return (
        <div className='w-full flex flex-col gap-10 items-center justify-center '>

            <div>
                <div>
                    <AnimatedHeader firstword={'My'} secondword={'Gists'}/>
                </div>
            </div>

            <div className="flex-wrap  mt-[4rem] flex gap-10">
                {gists.map((gist) => (
                    <div className="overflow-hidden  p-3 max-w-md mx-auto">
                        <Card
                            initial={{x: '150%'}}
                            animate={{x: 0}}
                            exit={{x: 500}}
                            transition={{duration: 0.4, ease: 'linear'}}
                            className='min-h-[35rem] border border-zinc-800 rounded-xl overflow-hidden   bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-lg transition-all duration-300'>

                            <motion.div

                                exit={{x: 700}}
                                transition={{duration: 0.3, ease: 'linear'}}
                            >
                                <CardHeader

                                    className="pb-2 overflow-hidden">
                                    <div className="flex justify-between items-start mb-2">

                                        <div className="flex items-center text-zinc-400 text-sm">
                                            <Calendar className="h-3.5 w-3.5 mr-1"/>
                                            {gist.date}
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{x: '-150%'}}
                                        animate={{x: 0}}
                                        transition={{duration: 0.5, ease: 'linear'}}
                                    >
                                        <CardTitle
                                            className="text-xl  line-clamp-1 font-bold text-zinc-100 ">{gist.title}</CardTitle>

                                    </motion.div>
                                </CardHeader>
                                <CardContent
                                    exit={{x: 600}}
                                    transition={{duration: 0.3, ease: 'linear'}}

                                ><p className="text-zinc-400 mb-5 line-clamp-3 text-sm">{gist.excerpt}</p>
                                    <CodeSnippet
                                        title="sending auto emails"
                                        language="javascript"
                                        code={gist.code}
                                    />
                                </CardContent>


                                <CardFooter className="flex justify-end items-center pt-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-zinc-300 float-right hover:text-white hover:bg-zinc-800 transition-all duration-300"


                                        asChild
                                    >
                                        <motion.a
                                            initial={{x: -50, scale: 1.05}}
                                            animate={{x: 0, scale: 1}}
                                            transition={{duration: 0.3, ease: 'linear'}}
                                            href={gist.url}>
                                            Read the full article <motion.span
                                            initial={{x: 0}}
                                            animate={{x: 4}}
                                            transition={{
                                                delay: 0.5,
                                                ease: 'linear',
                                                type: 'spring'
                                            }}>

                                            <ArrowRight className="h-4 w-4"/></motion.span>
                                        </motion.a>
                                    </Button>

                                </CardFooter>
                            </motion.div>
                        </Card>

                    </div>
                ))}

            </div>
        </div>


    )
}

export default GistsSection;
