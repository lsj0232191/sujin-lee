import React from "react";
import Socials from "./Socials";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
        id="hero"
        className="bg-blue-1 min-h-screen">                   
        <div className="container flex flex-col items-center justify-center mx-auto">
            <div className="flex flex-col items-start justify-center px-4">
                <h1 className="text-6xl font-bold pt-20 pb-5">
                    <span className="animate-fade-in">Hey, I&apos;m </span>
                    <span className="animate-fade-in-delay-1">Sujin Lee</span>
                </h1>
                <p className="text-4xl font-light pb-20">Software Engineer</p>
                <p className="md:tracking-wider mb-4 max-w-lg font-light text-muted-foreground">👋 Welcome! I&apos;m always open to feedback, collaboration, or a quick chat—feel free to get in touch or schedule a time to connect.</p>              
            </div>
            <Socials containerClassName="pt-10 mb-20"/>    
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
            <span className="text-muted-foreground text-sm mb-2"> Scroll </span>
            <ArrowDown className="w-5 h-5 text-blue-500" />
        </div>
    </section>
  );
};

export default Hero;