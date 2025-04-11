import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Hangman from "./pages/Hangman"
import Instructions from "./pages/Instructions"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/hangman" element={<Hangman />} />
      <Route path="/instructions" element={<Instructions />} />
    </Routes>
    </>
  )
}

export default App
