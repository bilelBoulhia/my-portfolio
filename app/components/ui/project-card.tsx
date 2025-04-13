import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'motion/react';

interface ProjectCardContent {
    title: string;
    description: string;
    technologies: Array<string>;
    techColors: Array<string>;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
}

interface ProjectCardProps {
    ProjectCardContent: ProjectCardContent;
    index:number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ ProjectCardContent,index }) => {
    return (
        <div
            className='flex justify-center  items-center py-10'>

                <motion.div

                     className="relative backdrop-filter w-[700px] shadow-4xl rounded-xl overflow-hidden">
                    <motion.div
                        initial={{x:0}}
                        whileInView={{x:'100%'}}
                        viewport={{once:true}}
                        transition={{duration:0.3,ease:'easeIn' ,delay: index * 0.1 }}
                        className="absolute w-[50%] inset-0">
                        <Image

                            src={ProjectCardContent.imageUrl}
                            alt="Project"
                            layout="fill"
                            objectFit="cover  "

                        />
                    </motion.div>
                    <div className="relative z-10 h-full flex flex-row  ">
                        <div className="relative z-10  p-4 flex w-[50%] flex-col bg-gray-800/30 backdrop-filter backdrop-blur-lg bg-opacity-30 ">

                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-semibold text-white">{ProjectCardContent.title}</h2>
                                <Link href={ProjectCardContent.githubUrl} target='_blank'>
                                    <FaGithub className="text-gray-400 cursor-pointer hover:text-gray-500"/>
                                </Link>
                            </div>


                            <div className='flex justify-start items-center flex-wrap'>
                                {ProjectCardContent.technologies.map((techstack, f) => (
                                    <div
                                         className='flex items-center text-gray-400 px-3 text-xs py-1 border border-gray-500 rounded-full mr-2 mb-2'>
                                        <div className="rounded-full h-2 w-2 mr-2"
                                             style={{backgroundColor: ProjectCardContent.techColors[f % ProjectCardContent.techColors.length]}}></div>
                                        {techstack}
                                    </div>
                                ))}
                            </div>

                            <div className='mt-3'>
                                <p className="text-gray-300 mb-3">{ProjectCardContent.description}</p>
                            </div>
                        </div>

                        <motion.div
                            initial={{width:0}}
                            whileInView={{width:'50%'}}
                            viewport={{once:true}}
                            transition={{duration:0.3,ease:'easeIn',delay: index * 0.1}}
                            className="w-[50%] z-50">
                            <Link href={ProjectCardContent.projectUrl} target='_blank'>
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={ProjectCardContent.imageUrl}
                                        alt="Project"
                                        layout="fill"
                                        objectFit="cover "

                                    />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

        </div>
    );
};

interface ProjectCardPhoneProps {
    ProjectCardContent: ProjectCardContent;
    index:number
}



const ProjectCardPhone: React.FC<ProjectCardPhoneProps> = ({ ProjectCardContent,index }) => {
    return (
        <div

            className='flex justify-center   items-center py-10'>

            <div

                className="relative backdrop-filter shadow-4xl rounded-xl overflow-hidden">

                <div className="relative z-10 h-full  flex justify-center   items-center flex-col-reverse md:flex-row  ">
                    <div

                        className="relative z-10 overflow-hidden  p-4 flex w-[50%]  flex-col  justify-center  ">

                        <motion.div


                            className="flex items-center overflow-hidden justify-between mb-2">
                            <h2 className="text-xl font-semibold text-white">{ProjectCardContent.title}</h2>
                            <Link href={ProjectCardContent.githubUrl} target='_blank'>
                                <motion.div
                                    initial={{y:'100%'}}
                                    whileInView={{y:0}}
                                    viewport={{once:true}}
                                    transition={{duration:0.5,ease:'easeIn' ,delay: index * 0.6 }}

                                    className='overflow-hidden'>
                                    <FaGithub className="text-gray-400 cursor-pointer hover:text-gray-500"/>
                                </motion.div>
                       </Link>
                        </motion.div>


                        <div className='flex justify-start overflow-hidden items-center flex-wrap'>
                            {ProjectCardContent.technologies.map((techstack, f) => (
                                <motion.div

                                    initial={{y:'-100%'}}
                                    animate={{y:0}}
                                    transition={{duration:0.5,ease:'easeIn' ,delay: index * 0.1 }}
                                    className='flex items-center text-gray-400 px-3 text-xs py-1 border border-neutral-800 rounded-full mr-2 mb-2'>
                                    <div

                                        className="rounded-full h-2 w-2 mr-2"
                                         style={{backgroundColor: ProjectCardContent.techColors[f % ProjectCardContent.techColors.length]}}></div>
                                    {techstack}
                                </motion.div>
                            ))}
                        </div>

                        <div className='mt-3'>
                            <p className="text-gray-300 mb-3">{ProjectCardContent.description}</p>
                        </div>
                    </div>

                    <div


                        className="w-[50%] overflow-hidden z-50">
                        <Link href={ProjectCardContent.projectUrl} target='_blank'>
                            <motion.div

                                initial={{x:'-100%'}}
                                animate={{x:0}}
                                transition={{duration:0.5,ease:'easeIn' ,delay: index * 0.1 }}

                                className="relative  h-[65vh] overflow-hidden">
                                <Image
                                    src={ProjectCardContent.imageUrl}
                                    alt="Project"
                                    layout="fill"
                                    objectFit="contain "

                                />
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
export {ProjectCard, ProjectCardPhone};