'use client';

import { useAuth } from '@/contexts/authcontext';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type AuthGuardProps = {
    children: ReactNode;
    requireAdmin?: boolean;
};

export default function AuthGuard({
                                      children,
                                      requireAdmin = false
                                  }: AuthGuardProps) {
    const { user, isLoading, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                router.push('/login');
            } else if (requireAdmin && user?.role !== 'ADMIN') {
                router.push('/dashboard');
            }
        }
    }, [isLoading, isAuthenticated, router, requireAdmin, user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return null;
    }

    if (requireAdmin && user?.role !== 'ADMIN') {
        return null;
    }

    return <>{children}</>;
}