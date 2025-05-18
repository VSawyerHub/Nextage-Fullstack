'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authcontext';
import Navbar from '@/components/navbar';
import Link from 'next/link';

export default function ProfilePage() {
    const params = useParams();
    const router = useRouter();
    const username = params?.username as string;
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile/${username}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }
                const data = await response.json();
                setProfile(data.user);
            } catch (err) {
                setError('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchProfile();
        } else {
            setError('Username is required');
            setLoading(false);
        }
    }, [username]);

    const isOwnProfile = user?.username === profile?.username;

    return (
        <div className="min-h-screen bg-game-dark text-white">
            <Navbar />

            <div className="max-w-4xl mx-auto p-8">
                {loading ? (
                    <div className="p-8 text-center text-gray-400">Loading profile...</div>
                ) : error ? (
                    <div className="p-8 bg-red-900/20 border border-red-900/30 rounded-md text-red-400 text-center">
                        {error}
                        <div className="mt-4">
                            <button
                                onClick={() => router.push('/')}
                                className="bg-game-blue hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                ) : !profile ? (
                    <div className="p-8 bg-game-gray rounded-lg text-center">
                        <h2 className="text-xl font-bold mb-4">User not found</h2>
                        <Link
                            href="/"
                            className="bg-game-blue hover:bg-blue-600 text-white px-4 py-2 rounded inline-block"
                        >
                            Back to Home
                        </Link>
                    </div>
                ) : (
                    <div className="bg-game-gray rounded-lg shadow-md p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-24 h-24 bg-game-light rounded-full overflow-hidden">
                                {profile.image ? (
                                    <img
                                        src={profile.image}
                                        alt={profile.username}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-game-blue/20 text-game-blue text-2xl font-bold">
                                        {profile.username.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold">{profile.username}</h1>
                                {profile.name && profile.name !== profile.username && (
                                    <p className="text-gray-400">{profile.name}</p>
                                )}
                                <p className="text-sm text-gray-500">
                                    Joined on {new Date(profile.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        {isOwnProfile && (
                            <div className="mt-6">
                                <button className="bg-game-blue hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded">
                                    Edit Profile
                                </button>
                            </div>
                        )}

                        {/* Game collection section - can be expanded later */}
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Game Collection</h2>
                            <div className="p-6 bg-game-dark rounded-lg text-center text-gray-400">
                                No games in collection yet
                            </div>
                        </div>

                        {/* Reviews section - can be expanded later */}
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Reviews</h2>
                            <div className="p-6 bg-game-dark rounded-lg text-center text-gray-400">
                                No reviews yet
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}