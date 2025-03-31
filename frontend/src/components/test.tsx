// src/components/TestConnection.tsx
import { useState, useEffect } from 'react';
import api from '../api/config';

export default function TestConnection() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const testBackendConnection = async () => {
            try {
                const response = await api.get('/api/test');
                setMessage(response.data.message);
                setLoading(false);
            } catch (err) {
                setError('Failed to connect to backend');
                setLoading(false);
            }
        };

        testBackendConnection();
    }, []);

    if (loading) return <p>Testing connection...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Backend Connection Test</h2>
            <p>{message}</p>
        </div>
    );
}