import React from 'react';
import { useState } from "react"
import { Navbar, Footer } from "./components"
import { Home, Signin, Signup, Aware, Events, Profile } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppwriteContext } from './appwrite'
import Me from './pages/Me';
import Logout from './pages/Logout';

function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin  setUser={setUser} user={user}/>} />
        <Route path="/signup" element={<Signup setUser={setUser} user={user} />} />
        <Route path="/aware" element={<Aware />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/me" element={<Me />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
