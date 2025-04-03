import Link from "next/link";

const TopBar = () => {
    return (
        <nav className="bg-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 text-white text-xl font-bold">
                            MoritzWebSolutions
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            Über mich
                        </Link>
                        <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
