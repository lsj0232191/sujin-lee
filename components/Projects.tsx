"use client";

import { projects } from "@/data";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Projects = () => {
    return (
        <section id="projects" className="bg-blue-3">
            <div className="container mx-auto flex flex-col items-center justify-center max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold pt-20 pb-5 mb-10">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-20 rounded-lg">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-full border-2 border-gray-500 shadow-lg rounded-xl p-6">
                                    <CardItem translateZ="100" className="w-full mt-4 mb-8">
                                        <img
                                            src={project.image}
                                            height="300"
                                            width="300"
                                            className="b-4 h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                                    >
                                    {project.title}
                                    </CardItem>
                                    <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-2"
                                    >
                                    {project.description}
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;    