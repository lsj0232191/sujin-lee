import React from "react";
import Image from "next/image";
import { experiences } from "@/data";

const Experience = () => {
    return (
        <section id="experience" className="bg-background">
            <div className="container mx-auto flex flex-col items-center justify-center max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold pt-20 pb-5 mb-10">Experience</h1>
                <div className="grid grid-cols-1 gap-12 items-center mb-20 rounded-xl">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[200px,12fr] mx-12 bg-white rounded-xl p-8 gap-2">
                            <div className="flex flex-col gap-4 w-44">
                                <p className="text-muted-foreground self-end">{exp.startDate} - {exp.endDate}</p>
                                <Image src={exp.image} alt={exp.image} width={32} height={32} className="self-end" />
                            </div>
                            <div className="flex flex-col gap-2 w-full self-start">
                                <p className="font-bold mb-2">{exp.name}</p>
                                <p className="text-muted-foreground">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}   

export default Experience;