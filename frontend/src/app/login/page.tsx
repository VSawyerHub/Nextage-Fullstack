'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import api from '@/app/api/config';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { data } = await api.post('/api/users/login', { email, password });

            localStorage.setItem('accessToken', data.accessToken);
            if (data.refreshToken) {
                localStorage.setItem('refreshToken', data.refreshToken);
            }

            router.push('/');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-game-dark">
            <Navbar />

            <div className="flex items-center justify-center py-12">
                <div className="bg-game-gray p-8 rounded-lg shadow-md w-96 text-white">
                    <h1 className="text-2xl mb-6 font-bold">Login</h1>

                    {error && (
                        <div className="bg-red-900/30 border border-red-800/50 text-red-400 p-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded bg-game-light border-gray-700 text-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 border rounded bg-game-light border-gray-700 text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-game-blue hover:bg-blue-600 text-white p-2 rounded transition-colors"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <Link href="/register" className="text-game-blue hover:text-blue-400">
                            Don't have an account? Register
                        </Link>
                    </div>

                    <div className="mt-2 text-center">
                        <Link href="/reset-password" className="text-gray-400 hover:text-gray-300">
                            Forgot your password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}