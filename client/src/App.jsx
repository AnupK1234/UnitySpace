import { Navbar, Footer } from "./components"
import { Home, Signin, Signup, Aware, Events, Profile } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppwriteContext } from './appwrite'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aware" element={<Aware />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
