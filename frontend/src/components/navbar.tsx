'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/authcontext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/database?search=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            router.push('/database');
        }
    };

    return (
        <nav className="bg-game-dark text-white p-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Link href="/" className="text-xl font-bold">
                    Nextage
                </Link>

                <form onSubmit={handleSearch} className="flex w-full md:w-auto md:max-w-md">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for games..."
                        className="flex-1 p-2 bg-game-light border-none rounded-l-md text-white focus:outline-none focus:ring-1 focus:ring-game-blue"
                    />
                    <button
                        type="submit"
                        className="bg-game-blue hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-r-md transition-colors"
                    >
                        Search
                    </button>
                </form>

                <div className="flex items-center space-x-4">
                    <Link href="/database" className="hover:text-game-blue">
                        Game Database
                    </Link>
                    {isAuthenticated ? (
                        <div className="flex items-center gap-4">
                            <Link href="/dashboard" className="hover:text-game-blue">
                                Dashboard
                            </Link>
                            <Link href={`/profile/${user?.username}`} className="hover:text-game-blue">
                                Profile
                            </Link>
                            <span>Hello, {user?.username}</span>
                            <button
                                onClick={logout}
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="bg-game-blue px-4 py-2 rounded hover:bg-blue-600">
                                Login
                            </Link>
                            <Link href="/register" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;