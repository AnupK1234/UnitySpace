import { Account } from 'appwrite';
import { client } from '../appwrite';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { AuthContext } from '../context/Auth';

export default function Me() {
    const {user, setUser} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            {JSON.stringify(user, null, 4)}
        </div>
    )
}
