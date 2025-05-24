import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-28 px-4 sm:px-8 flex items-center justify-center pb-2">
            <nav className="w-full flex justify-center">
                <div className="rounded-full shadow-lg bg-white/80 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 md:px-16 lg:px-24 xl:px-32 py-4 max-w-7xl w-full">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <span className="font-bold text-xl text-black">Sujin Lee</span>
                        <span className="text-gray-600">/ Portfolio</span>
                    </div>
                    <div className="flex space-x-6 sm:space-x-10 overflow-x-auto scrollbar-hide w-full sm:w-auto justify-center sm:justify-end">
                        <Link href="#home" className="font-medium whitespace-nowrap text-black hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="#about" className="font-medium whitespace-nowrap text-black hover:text-blue-600 transition-colors">About</Link>
                        <Link href="#experience" className="font-medium whitespace-nowrap text-black hover:text-blue-600 transition-colors">Experience</Link>
                        <Link href="#skills" className="font-medium whitespace-nowrap text-black hover:text-blue-600 transition-colors">Skills</Link>
                        <Link href="#contact" className="font-medium whitespace-nowrap text-black hover:text-blue-600 transition-colors">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;