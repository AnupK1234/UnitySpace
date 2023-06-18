import React, { useState, useEffect, useContext } from 'react';
import { Account } from 'appwrite';
import { client } from '../appwrite';
import { AuthContext } from '../context/Auth';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 *
 * @param {import('react').PropsWithChildren} props
 * @returns {import('react').ReactNode}
 */
export default function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (user.state == 'logged-out' || user.state == 'null' || user.state == 'error') {
            console.log('redirecting to signin', user)
            navigate('/signin');
        }
    }, []);
    if (user.state === 'logged-in') {
        return children;
    } else {
        console.log('loading with state', user)
        return <div>Loading...</div>
    }
}
