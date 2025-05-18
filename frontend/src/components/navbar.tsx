import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Nextage
                </Link>

                <div className="space-x-4">
                    {session ? (
                        <div className="flex items-center gap-4">
                            <span>Hello, {session.user.name || session.user.email}</span>
                            <button
                                onClick={() => signOut()}
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
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