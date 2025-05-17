import React from 'react';
import GameSearch from './games/gamesearch';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-2 bg-[#2a2a2a] text-white shadow-md">
            <div className="flex items-center flex-1">
                <Link href="/" className="text-xl font-bold text-white hover:text-gray-300">
                    Nextage
                </Link>
            </div>

            <div className="flex items-center justify-center flex-2 max-w-[500px] w-full px-4">
                <GameSearch />
            </div>

            <div className="flex items-center justify-end flex-1">
                <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                    Sign In / Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;