import React from "react";
import Image from "next/image";
import Socials from "./Socials";

const AboutMe = () => {
    return (
        <section 
            id="about"
            className="bg-blue-2 relative">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold pt-20 pb-5 mb-10">About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 bg-white rounded-lg p-10 mx-auto my-auto max-w-6xl">
                    <div className="flex items-center justify-center">
                        <Image src="/images/about-me.png" alt="about-me" width={400} height={400} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold mb-12">Hello, I&apos;m Sujin Lee</h2>
                        <div className="flex flex-col gap-8 mb-16">
                            <span className="text-muted-foreground">I&apos;m studying Computer Science and Applied Math & Stats at Johns Hopkins University. I like building things that solve real problems, whether that’s through software, data, or a mix of both.</span>
                            <span className="text-muted-foreground">I&apos;ve worked on projects that range from job tracking tools to battery prediction models, and I enjoy working across the stack. I’m especially interested in how machine learning can be used in practical, everyday systems.</span>
                            <span className="text-muted-foreground">Outside of school and code, I love puzzles, exploring new ideas, and learning from the people around me.
                        Feel free to reach out — happy to chat!</span>
                        </div>
                        <Socials containerClassName="mt-auto self-end"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;