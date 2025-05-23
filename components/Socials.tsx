import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialsProps {
    containerClassName?: string;
}

const socialLinks = [
    {
        href: "https://github.com/lsj0232191",
        icon: <FaGithub size={24}/>
    },
    {
        href: "https://www.linkedin.com/in/sujin-lee-6a0766258/",
        icon: <FaLinkedin size={24}/>
    },
    {
        href: "mailto:lsj0232191@gmail.com",
        icon: <FaEnvelope size={24}/>
    }
]

const Socials: React.FC<SocialsProps> = ({ containerClassName = "" }) => {
    return (
        <div className={`flex flex-row gap-4 ${containerClassName}`}>
            {socialLinks.map((link) => (
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;