import React from "react";
import { skills } from "@/data";
import Image from "next/image";

const Skills = () => {
    return (
        <section id="skills" className="bg-blue-2">
            <div className="container mx-auto flex flex-col items-center justify-center max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold pt-20 pb-5 mb-10">Skills</h1>
                <div className="flex flex-wrap mt-8 justify-between mb-20">
                    {skills.map((skill) => (
                        <div key={skill.id} className="py-2 px-4 mx-2 mt-6 flex bg-background rounded-lg items-center md:w-48 w-44">
                            <Image src={skill.image} alt={skill.name} width={40} height={40} className="w-12"/>
                            <p className="text-center text-md ml-4">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;