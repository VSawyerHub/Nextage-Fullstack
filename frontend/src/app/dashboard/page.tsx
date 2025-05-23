'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/authcontext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Dashboard() {
    const { user, isLoading, isAuthenticated } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isLoading, isAuthenticated, router]);

    // If still loading, show a loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-game-dark">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-game-blue"></div>
            </div>
        );
    }

    // If not authenticated, don't render anything (redirect will happen in useEffect)
    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-game-dark text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-10">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                        <p className="text-gray-400">Welcome back, {user.username}!</p>
                    </div>

                    {/* Dashboard navigation */}
                    <div className="border-b border-gray-700 mb-6">
                        <nav className="flex space-x-8">
                            <button
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'overview'
                                        ? 'border-game-blue text-game-blue'
                                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                                }`}
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </button>
                            <button
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'settings'
                                        ? 'border-game-blue text-game-blue'
                                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                                }`}
                                onClick={() => setActiveTab('settings')}
                            >
                                Settings
                            </button>
                            <button
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'security'
                                        ? 'border-game-blue text-game-blue'
                                        : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                                }`}
                                onClick={() => setActiveTab('security')}
                            >
                                Security
                            </button>
                        </nav>
                    </div>

                    {/* Overview tab content */}
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* User profile card */}
                            <div className="bg-game-gray rounded-lg shadow p-6 col-span-1">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 bg-game-blue/20 rounded-full flex items-center justify-center text-game-blue text-xl font-bold">
                                        {user.username.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">{user.username}</h2>
                                        <p className="text-gray-400">{user.email}</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-700 pt-4">
                                    <h3 className="font-medium mb-2">Account Details</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <p className="text-sm text-gray-400">Role</p>
                                            <p className="font-medium">{user.role}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">User ID</p>
                                            <p className="text-sm font-mono truncate">{user.id}</p>
                                        </div>
                                        <div className="mt-2">
                                            <Link
                                                href={`/profile/${user.username}`}
                                                className="text-game-blue hover:text-blue-400 text-sm font-medium"
                                            >
                                                View Public Profile →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent activity */}
                            <div className="bg-game-gray rounded-lg shadow p-6 col-span-2">
                                <h3 className="font-medium text-lg mb-4">Recent Activity</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium">Successful login</p>
                                            <p className="text-sm text-gray-400">Just now</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium">Profile updated</p>
                                            <p className="text-sm text-gray-400">2 days ago</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-purple-900/30 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium">Account created</p>
                                            <p className="text-sm text-gray-400">1 week ago</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <button className="text-game-blue hover:text-blue-400 text-sm font-medium">
                                        View all activity
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Settings tab content */}
                    {activeTab === 'settings' && (
                        <div className="bg-game-gray rounded-lg shadow p-6">
                            <h3 className="font-medium text-lg mb-6">Account Settings</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-md bg-game-light border-gray-700 text-white shadow-sm focus:border-game-blue focus:ring focus:ring-game-blue focus:ring-opacity-50"
                                            defaultValue={user.username}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full rounded-md bg-game-light border-gray-700 text-white shadow-sm focus:border-game-blue focus:ring focus:ring-game-blue focus:ring-opacity-50"
                                            defaultValue={user.email}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="px-4 py-2 bg-game-blue text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Security tab content */}
                    {activeTab === 'security' && (
                        <div className="bg-game-gray rounded-lg shadow p-6">
                            <h3 className="font-medium text-lg mb-6">Security Settings</h3>

                            <form className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full rounded-md bg-game-light border-gray-700 text-white shadow-sm focus:border-game-blue focus:ring focus:ring-game-blue focus:ring-opacity-50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full rounded-md bg-game-light border-gray-700 text-white shadow-sm focus:border-game-blue focus:ring focus:ring-game-blue focus:ring-opacity-50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full rounded-md bg-game-light border-gray-700 text-white shadow-sm focus:border-game-blue focus:ring focus:ring-game-blue focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="px-4 py-2 bg-game-blue text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                        Update Password
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <h4 className="font-medium text-red-400 mb-2">Danger Zone</h4>
                                <button className="px-4 py-2 bg-red-900/30 text-red-400 rounded-md hover:bg-red-800/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}