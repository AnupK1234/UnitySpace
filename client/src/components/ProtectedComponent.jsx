import React, { useState, useEffect, useContext } from 'react';
import { Account } from 'appwrite';
import { client } from '../appwrite';
import { AuthContext } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

/**
 *
 * @param {import('react').PropsWithChildren} props
 * @returns {import('react').ReactNode}
 */
export default function ProtectedRoute({ children }) {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.state !== 'logged-in') {
            navigate('/signin');
        } else {
            return children;
        }
    }, [user, children, navigate]);
}
