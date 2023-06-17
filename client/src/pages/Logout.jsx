// logout using appwrite
import { Account } from 'appwrite';
import { client } from '../appwrite';
import { useEffect } from 'react';
import React from 'react';

export default function Logout() {
    const account = new Account(client);

    useEffect(() => {
        (async () => {
            await account.deleteSession('current');
        })()
    }, []);

    return (
        <div>
            <h1>Logged out</h1>
        </div>
    )
}
