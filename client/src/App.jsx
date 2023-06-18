import React from 'react';
import { useState, useEffect } from "react"
import { Navbar, Footer } from "./components"
import { Home, Signin, Signup, Aware, Events, Profile, News } from "./pages"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { AppwriteContext, client } from './appwrite'
import Me from './pages/Me';
import Logout from './pages/Logout';
import { AuthContext } from './context/Auth';
import { Account } from 'appwrite';
import ProtectedRoute from './components/ProtectedComponent';

function App() {
  const defaultUser = { userId: null, name: null, picture: null, state: 'null' };
  const [user, setUser] = useState(defaultUser);

  const account = new Account(client);

  const resetUser = () => {
    setUser(defaultUser);
  }

  if (user.state === 'null') {
    setUser(user => {
      return {...user, state: 'loading'};
    });
    (async () => {
      try {
        const result = await account.getSession('current');
        console.log('From app.jsx', result)
        setUser(user => {
          return {...user, ...result, state: 'logged-in'};
        });
      } catch (error) {
        if (error.code !== 401) {
          console.error('Error in auth', JSON.stringify(error));
          setUser(user => {
            return {...defaultUser, state: 'error'};
          });
        } else {
          setUser(user => {
            return {...defaultUser, state: 'logged-out'};
          })
        }
      }
    })();
  }


  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup setUser={setUser} user={user} />} />
        <Route path="/aware" element={<Aware />} />
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/me" element={<ProtectedRoute><Me /></ProtectedRoute>} />
        <Route path="/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />
        <Route path="/news" element={<ProtectedRoute><News /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
