import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-background">
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-start justify-center">
                <h1 className="text-6xl font-bold pt-20 pb-5">Hey, I'm Sujin Lee</h1>
                <p className="text-4xl font-light pb-20">Software Engineer</p>
                <p className="md:tracking-wider mb-4 max-w-lg font-light">👋 Welcome! I'm always open to feedback, collaboration, or a quick chat—feel free to get in touch or schedule a time to connect.</p>
            </div>
        </div>
    </div>
  );
};

export default Hero;