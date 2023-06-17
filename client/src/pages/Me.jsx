import { Account } from 'appwrite';
import { client } from '../appwrite';
import { useEffect, useState } from 'react';
import React from 'react';

export default function Me() {
    const account = new Account(client);
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await account.get();
            setUser(res);
        })()
    }, []);

    return (
        <div>
            {JSON.stringify(user, null, 4)}
        </div>
    )
}
