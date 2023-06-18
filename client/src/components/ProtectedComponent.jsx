import React, {useState, useEffect, useContext } from 'react';
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
  const [gotUser, setGotUser] = useState(false);
  const navigate = useNavigate();

  const account = new Account(client);

  useEffect(() => {
    (async () => {
      try {
        const result = await account.getSession('current');
        setUser(result);
      } catch (error) {
        if (error.code === 401) {
            navigate('/signin')
        } else {
          console.error('Error in auth', error);
        }
        setUser(null);
      }
      setGotUser(true);
    })();
  }, [user, setUser])

  if (!gotUser) {
    return <div>Loading...</div>
  }
  return children;
}
