"use client"
import {Card} from "@/app/components/ui/Card"
import {m} from "motion/react";
import {useEffect, useState} from "react";
import AnimatedHeader from "@/app/components/ui/animated-header";
import {contactMethods} from "@/app/constants";
import {useMediaQuery} from "usehooks-ts";

export default function ContactSection() {

    const phone = useMediaQuery('(min-width: 526px)')

    return (


        <div className="flex overflow-hidden  flex-col p-3 gap-10  items-center">

            <div className='overflow-hidden'>
                <div className='overflow-hidden '>
                    <AnimatedHeader firstword={'Contact'} secondword={'info'}/>
                </div>
            </div>


            <m.div
                transition={{duration: 0.3, ease: 'linear'}}
                className="flex flex-wrap overflow-hidden  items-center justify-center max-w-6xl  mt-[4rem] gap-6 mt-8">
                {contactMethods.map((method, i) => (
                    <div className='overflow-hidden '>

                    <Card
                        initial={{y:phone ? (i === 0 ? -200 : -200 * (i) + 0.5) : 0,
                                  x:phone ?  0 : (i === 0 ? -200 : -200 * (i) + 0.5)

                        }}
                        animate={{y: 0,x:0}}
                        exit={{y:phone ? ( i === 0 ? 300 : 300 * (i) + 0.5) : 0,
                               x:phone ?  0 : '150%'
                        }}
                        onClick={() => method.islink ? location.href = method.value : ''}
                        transition={{duration:phone ? 0.6 : 0.3, ease: 'linear'}}
                        key={method.id}
                        className={`group  relative ${method.islink && 'cursor-pointer'}  overflow-hidden min-w-[15rem] bg-[#111] border-0`}>
                        <div
                            className={`absolute  inset-0 bg-gradient-to-br ${method.color} opacity-20 transition-opacity duration-300`}
                        ></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>

                        <div className="p-6 relative ">
                            <div className="flex items-center mb-4">
                                <div>
                                    <method.icon className="h-6 w-6 text-white"/>
                                </div>

                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-white">
                                        {method.id.charAt(0).toUpperCase() + method.id.slice(1)}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-gray-300">{method.label}</p>
                        </div>
                    </Card>
                </div>
                ))}
            </m.div>


            <m.div

                initial={{y: '100%'}}
                animate={{y: 0}}
                exit={{y: '120%'}}
                transition={{

                    duration: 0.3,
                    ease: 'linear'
                }}

                className="mt-16 bg-[#111] rounded-xl p-6  border border-[#222]">
                <div className="inline-flex flex-row items-center justify-between gap-15">
                    <div className="text-center ">
                        <h3 className="text-2xl font-bold text-white mb-2">Current Status <span
                            className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span></h3>

                    </div>

                    <div className="inline-flex justify-evenly items-center  gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-500 mb-1">

                                12h</div>
                            <div className="text-sm text-gray-400">Response Time</div>
                        </div>
                        <div className="text-center overflow-hidden">
                            <h3 className="text-3xl z-15  font-bold text-purple-500 overflow-hidden mb-1">
                                GMT+1

                            </h3>
                            <div className="text-sm text-gray-400">Time Zone</div>
                        </div>
                    </div>
                </div>
            </m.div>
        </div>


    )
}
