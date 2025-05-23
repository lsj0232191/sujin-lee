import { projects } from "@/data";
import React from "react";
import Image from "next/image";
const Projects = () => {
    return (
        <section id="projects" className="bg-secondary">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold pt-20 pb-5 mb-10">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center mb-20 rounded-lg">
                    {projects.map((project) => (
                        <div key={project.id} className="grid grid-cols-1 mx-2 bg-background rounded-lg p-8 gap-2 h-full border-2 border-gray-500 shadow-lg">
                            <div className="flex flex-col gap-2 w-full self-start h-full">
                                <Image src={project.image} alt={project.title} width={300} height={300} className="pb-4" />
                                <p className="font-bold text-xl mb-2">{project.title}</p>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;    