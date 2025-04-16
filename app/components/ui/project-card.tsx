import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { m } from "motion/react"


interface ProjectCardContent {
    title: string
    description: string
    technologies: Array<string>
    techColors: Array<string>
    projectType?: string
    imageUrl?: string
    projectUrl: string
    githubUrl: string
}

interface ProjectCardProps {
    ProjectCardContent: ProjectCardContent
    index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ ProjectCardContent}) => {

    return (
        <div className="flex justify-center  items-center py-10">
            <div className="relative backdrop-filter w-[320px] sm:w-[400px] md:w-[700px] shadow-4xl rounded-xl overflow-hidden">

                <div className="relative z-10 h-full flex flex-col-reverse items-center md:items-stretch   md:flex-row ">
                    <div className="relative z-10  p-4 flex  w-full  md:w-[50%] flex-col bg-gray-800/30 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className=" text-xl font-semibold text-white">{ProjectCardContent.title}</h2>
                            <Link href={ProjectCardContent.githubUrl} target="_blank">
                                <FaGithub className="text-gray-400 cursor-pointer hover:text-gray-500" />
                            </Link>
                        </div>

                        <div className="flex justify-start items-center flex-wrap">
                            {ProjectCardContent.technologies.map((techstack, f) => (
                                <div className="flex items-center text-gray-400 px-3 text-xs py-1 border border-gray-500 rounded-full mr-2 mb-2">
                                    <div
                                        className="rounded-full h-2 w-2 mr-2"
                                        style={{ backgroundColor: ProjectCardContent.techColors[f % ProjectCardContent.techColors.length] }}
                                    ></div>
                                    {techstack}
                                </div>
                            ))}
                        </div>

                        <div className="mt-3">
                            <p className="text-gray-300 mb-3">{ProjectCardContent.description}</p>
                        </div>
                    </div>

                    <div className=" w-full z-50">
                        <Link href={ProjectCardContent.projectUrl} target="_blank">
                            <div className="relative h-52 overflow-hidden">
                                <Image src={ProjectCardContent.imageUrl || ""} alt="Project" layout="fill" objectFit="cover " />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface ProjectCardPhoneProps {
    ProjectCardContent: ProjectCardContent
    index: number
}

const ProjectCardPhone: React.FC<ProjectCardPhoneProps> = ({ ProjectCardContent }) => {
    return (
        <div className="flex justify-center items-center py-10">
            <m.div
                className="relative backdrop-filter shadow-4xl rounded-xl overflow-hidden"
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="relative z-10 gap-10 m-5 h-full flex justify-center items-center  flex-col-reverse md:flex-row">
                    <m.div
                        className="relative z-10 overflow-hidden p-4 flex md:w-[50%]  flex-col justify-center"
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center  justify-between mb-2">
                            <h2 className="text-xl font-semibold text-white">{ProjectCardContent.title}</h2>
                            <Link href={ProjectCardContent.githubUrl} target="_blank">
                                <m.div
                                    className="overflow-hidden"
                                    animate={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <FaGithub className="text-gray-400 cursor-pointer hover:text-gray-500" />
                                </m.div>
                            </Link>
                        </div>

                        <div className="flex justify-start overflow-hidden items-center flex-wrap">
                            {ProjectCardContent.technologies.map((techstack, f) => (
                                <m.div
                                    key={f}
                                    className="flex items-center text-gray-400 px-3 text-xs py-1 border border-neutral-800 rounded-full mr-2 mb-2"
                                    initial={{ y: "150%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 1 + f * 0.1,
                                        type: "spring",
                                    }}
                                >
                                    <div
                                        className="rounded-full h-2 w-2 mr-2"
                                        style={{ backgroundColor: ProjectCardContent.techColors[f % ProjectCardContent.techColors.length] }}
                                    ></div>
                                    {techstack}
                                </m.div>
                            ))}
                        </div>

                        <div className="mt-3 text-left">
                            <p className="text-gray-300 mb-3">{ProjectCardContent.description}</p>
                        </div>
                    </m.div>

                    <m.div
                        className="w-[50%] overflow-hidden z-50"
                        initial={{ x: 20 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href={ProjectCardContent.projectUrl} target="_blank">
                            <m.div
                                className="relative h-[40vh] sm:h-[65vh] overflow-hidden"
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={ProjectCardContent.imageUrl || "/placeholder.svg"}
                                    alt="Project"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </m.div>
                        </Link>
                    </m.div>
                </div>
            </m.div>
        </div>
    )
}

const ProjectCardDefault: React.FC<ProjectCardProps> = ({ ProjectCardContent }) => {
    return (
        <div className="flex justify-center   items-center py-10">
            <m.div className="relative   backdrop-filter w-[320px] sm:w-[350px] shadow-4xl rounded-xl overflow-hidden">
                <div className="relative z-10 h-full   ">
                    <div className="relative z-10 min-h-[200px]  p-4 flex  flex-col bg-gray-800/30 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-semibold text-white">{ProjectCardContent.title}</h2>
                            <Link href={ProjectCardContent.githubUrl} target="_blank">
                                <FaGithub className="text-gray-400 cursor-pointer hover:text-gray-500" />
                            </Link>
                        </div>

                        {ProjectCardContent.projectType && (
                            <div className="text-left py-3 ">
                <span className=" bg-gray-800/60 font-semibold shadow-2xl  rounded-xl p-2  ">
                  {ProjectCardContent.projectType}
                </span>
                            </div>
                        )}

                        <div className="flex justify-start items-center flex-wrap">
                            {ProjectCardContent.technologies.map((techstack, f) => (
                                <div className="flex items-center text-gray-400 px-3 text-xs py-1 border border-gray-500 rounded-full mr-2 mb-2">
                                    <div
                                        className="rounded-full h-2 w-2 mr-2"
                                        style={{ backgroundColor: ProjectCardContent.techColors[f % ProjectCardContent.techColors.length] }}
                                    ></div>
                                    {techstack}
                                </div>
                            ))}
                        </div>

                        <div className="mt-3">
                            <p className="text-gray-300 mb-3">{ProjectCardContent.description}</p>
                        </div>
                    </div>
                </div>
            </m.div>
        </div>
    )
}

export { ProjectCard, ProjectCardPhone, ProjectCardDefault }
