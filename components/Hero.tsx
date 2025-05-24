import React from "react";
import Socials from "./Socials";
import { ArrowDown } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(236, 244, 254)" // blue-1, matches navbar
        gradientBackgroundEnd="rgb(163, 189, 237)"   // blue-3
        firstColor="163, 189, 237"                   // blue-3
        secondColor="211, 229, 248"                  // blue-2
        thirdColor="236, 244, 254"                   // blue-1
        fourthColor="163, 189, 237"                  // blue-3
        fifthColor="211, 229, 248"                   // blue-2
        pointerColor="163, 189, 237"                 // blue-3
        containerClassName=""
    >
    {/* Navbar with pointer events enabled */}
    <div className="absolute top-0 left-0 right-0 z-50 pointer-events-auto">
        <Navbar />
    </div>
    
    {/* Main hero content */}
    <section 
        id="hero"
        className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl pointer-events-none">
        <div className="container flex flex-col items-center justify-center mx-auto flex-1">
            <div className="flex flex-col items-start justify-center px-4">
                <h1 className="text-6xl font-bold pt-20 pb-5">
                    <span className="animate-fade-in text-black">Hey, I&apos;m </span>
                    <span className="animate-fade-in-delay-1 text-black">Sujin Lee</span>
                </h1>
                <p className="text-4xl font-light pb-20 text-black">Software Engineer</p>
                <p className="md:tracking-wider mb-4 max-w-lg font-light text-muted-foreground text-sm">👋 Welcome! I&apos;m always open to feedback, collaboration, or a quick chat—feel free to get in touch or schedule a time to connect.</p>              
            </div>
            <div className="pointer-events-auto">
                <Socials containerClassName="pt-10 mb-20"/>    
            </div>
        </div>
        
        <div className="w-full flex justify-center pb-8">
            <div className="flex flex-col items-center justify-center animate-bounce text-black">
                <span className="text-muted-foreground text-sm mb-2"> Scroll </span>
                <ArrowDown className="w-5 h-5 text-blue-500" />
            </div>
        </div>
    </section>
    </BackgroundGradientAnimation>
  );
};

export default Hero;