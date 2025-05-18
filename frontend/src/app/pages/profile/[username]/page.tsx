'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuth } from '@/contexts/authcontext';
export default function ProfilePage() {
    const params = useParams();
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


    if (loading) return <div className="p-8">Loading profile...</div>;
    if (error) return <div className="p-8 text-red-500">{error}</div>;
    if (!profile) return <div className="p-8">User not found</div>;

    const isOwnProfile = user?.username === profile.username;

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                        {profile.image ? (
                            <img
                                src={profile.image}
                                alt={profile.username}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500 text-2xl font-bold">
                                {profile.username.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">{profile.username}</h1>
                        {profile.name && profile.name !== profile.username && (
                            <p className="text-gray-600">{profile.name}</p>
                        )}
                        <p className="text-sm text-gray-500">
                            Joined on {new Date(profile.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                {isOwnProfile && (
                    <div className="mt-6">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Edit Profile
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}