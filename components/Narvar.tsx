import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full flex justify-center mt-6 bg-background">
            <div className="bg-white rounded-full shadow-lg flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 max-w-5xl w-full">
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <span className="font-bold text-xl">Sujin Lee</span>
                    <span className="text-gray-400">/ Portfolio</span>
                </div>
                <div className="flex space-x-6 sm:space-x-10 overflow-x-auto scrollbar-hide w-full sm:w-auto justify-center sm:justify-end">
                    <Link href="#home" className="font-medium whitespace-nowrap">Home</Link>
                    <Link href="#about" className="font-medium whitespace-nowrap">About</Link>
                    <Link href="#experience" className="font-medium whitespace-nowrap">Experience</Link>
                    <Link href="#skills" className="font-medium whitespace-nowrap">Skills</Link>
                    <Link href="#contact" className="font-medium whitespace-nowrap">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;