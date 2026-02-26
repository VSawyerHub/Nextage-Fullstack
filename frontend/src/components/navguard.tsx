'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const [checked, setChecked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            router.push('/login');
        } else {
            setChecked(true);
        }
    }, [router]);

    if (!checked) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default AuthGuard;