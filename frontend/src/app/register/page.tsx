'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            router.push('/login');
        } catch (err: any) {
            setError(err.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-game-dark">
            <Navbar />

            <div className="flex items-center justify-center py-12">
                <div className="bg-game-gray p-8 rounded-lg shadow-lg w-96 border border-game-light">
                    <h1 className="text-2xl mb-6 font-bold text-white">Register</h1>

                    {error && (
                        <div className="bg-red-900/30 border border-red-800 text-red-300 p-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-300">Username</label>
                            <input
                                type="text"
                                className="w-full p-2 bg-game-light border border-gray-700 rounded text-white"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 bg-game-light border border-gray-700 rounded text-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-gray-300">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-game-light border border-gray-700 rounded text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-gray-300">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full p-2 bg-game-light border border-gray-700 rounded text-white"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-game-blue hover:bg-blue-600 text-white p-2 rounded transition-colors"
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </form>

                    <div className="mt-4 text-center text-gray-300">
                        <Link href="/login" className="text-game-blue hover:text-blue-400">
                            Already have an account? Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}