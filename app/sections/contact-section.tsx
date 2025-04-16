"use client"

import { useState, useEffect } from "react"
import { Github, Mail, Phone, Instagram, Facebook, ExternalLink } from "lucide-react"

import { Card } from "@/app/components/ui/Card"
import {Button} from "@/app/components/ui/button";

export default function ContactSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)
    const [copied, setCopied] = useState<string | null>(null)

    // Reset copied state after 2 seconds
    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => setCopied(null), 2000)
            return () => clearTimeout(timeout)
        }
    }, [copied])

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text)
        setCopied(type)
    }

    const contactMethods = [
        {
            id: "phone",
            icon: Phone,
            label: "+1 (234) 567-8901",
            value: "+12345678901",
            color: "from-purple-500 to-blue-600",
            hoverColor: "group-hover:from-purple-600 group-hover:to-blue-700",
        },
        {
            id: "email",
            icon: Mail,
            label: "your.email@example.com",
            value: "your.email@example.com",
            color: "from-blue-500 to-cyan-500",
            hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-600",
        },
        {
            id: "github",
            icon: Github,
            label: "github.com/yourusername",
            value: "https://github.com/yourusername",
            color: "from-gray-700 to-gray-900",
            hoverColor: "group-hover:from-gray-800 group-hover:to-black",
            isLink: true,
        },
        {
            id: "instagram",
            icon: Instagram,
            label: "instagram.com/yourusername",
            value: "https://instagram.com/yourusername",
            color: "from-pink-500 to-purple-600",
            hoverColor: "group-hover:from-pink-600 group-hover:to-purple-700",
            isLink: true,
        },
        {
            id: "facebook",
            icon: Facebook,
            label: "facebook.com/yourusername",
            value: "https://facebook.com/yourusername",
            color: "from-blue-600 to-blue-800",
            hoverColor: "group-hover:from-blue-700 group-hover:to-blue-900",
            isLink: true,
        },
    ]

    return (
        <section className="w-full py-16 bg-black text-white overflow-hidden relative" id="contact">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 pb-2">
                            Connect With Me
                        </h2>
                        <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                    </div>
                    <p className="max-w-[700px] text-gray-400 md:text-xl">Let's collaborate on something amazing together</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {contactMethods.map((method) => (
                        <Card
                            key={method.id}
                            className={`group relative overflow-hidden bg-[#111] border-0 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-${method.id === "github" ? "gray" : "blue"}-900/20`}
                            onMouseEnter={() => setHoveredCard(method.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${method.color} ${method.hoverColor} opacity-20 transition-opacity duration-300`}
                            ></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>

                            <div className="p-6 relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${method.color}`}>
                                        <method.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-white">
                                            {method.id.charAt(0).toUpperCase() + method.id.slice(1)}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-gray-300 truncate max-w-[70%]">{method.label}</p>

                                    {method.isLink ? (
                                        <a
                                            href={method.value}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors duration-200 flex items-center"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    ) : (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleCopy(method.value, method.id)}
                                            className="text-white bg-white/10 hover:bg-white/20 p-2 h-9 rounded-lg transition-colors duration-200"
                                        >
                                            {copied === method.id ? (
                                                <span className="text-xs">Copied!</span>
                                            ) : (
                                                <span className="text-xs">Copy</span>
                                            )}
                                        </Button>
                                    )}
                                </div>

                                {/* Animated border on hover */}
                                <div
                                    className={`absolute inset-0 border-2 border-transparent transition-all duration-500 ${hoveredCard === method.id ? "border-gradient-animated" : ""}`}
                                ></div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Stats-inspired section */}
                <div className="mt-16 bg-[#111] rounded-xl p-6 border border-[#222]">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold text-white mb-2">Current Status</h3>
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                <span className="text-gray-300">Available for new opportunities</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-500 mb-1">24h</div>
                                <div className="text-sm text-gray-400">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-500 mb-1">GMT+2</div>
                                <div className="text-sm text-gray-400">Time Zone</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-500 mb-1">100%</div>
                                <div className="text-sm text-gray-400">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
