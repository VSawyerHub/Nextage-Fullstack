import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface AuthGuardProps {
    children: React.ReactNode;
    roles?: string[]; // Optional roles for role-based access control
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, roles }) => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const router = useRouter();

    useEffect(() => {
        // If not loading and not authenticated, redirect to login
        if (!loading && !session) {
            router.push({
                pathname: '/login',
                query: { returnUrl: router.asPath }
            });
        }

        // If roles specified and user doesn't have required role
        if (session && roles && !roles.includes(session.user.role)) {
            router.push('/unauthorized');
        }
    }, [loading, session, router, roles]);

    // Show nothing while loading
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no session or unauthorized role, don't render children
    if (!session || (roles && !roles.includes(session.user.role))) {
        return null;
    }

    // Otherwise render children
    return <>{children}</>;
};

export default AuthGuard;