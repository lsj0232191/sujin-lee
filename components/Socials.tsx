import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialsProps {
    containerClassName?: string;
}

const socialLinks = [
    {
        key: "github",
        href: "https://github.com/lsj0232191",
        icon: <FaGithub size={24}/>
    },
    {
        key: "linkedin",
        href: "https://www.linkedin.com/in/sujin-lee321/",
        icon: <FaLinkedin size={24}/>
    },
    {
        key: "email",
        href: "mailto:sujin321.lee@gmail.com",
        icon: <FaEnvelope size={24}/>
    }
]

const Socials: React.FC<SocialsProps> = ({ containerClassName = "" }) => {
    return (
        <div className={`flex flex-row gap-4 ${containerClassName}`}>
            {socialLinks.map((link) => (
                <Link href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                    {link.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;