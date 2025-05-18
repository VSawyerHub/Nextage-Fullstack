'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/authcontext";

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <nav className="bg-game-dark text-white p-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Nextage
                </Link>

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