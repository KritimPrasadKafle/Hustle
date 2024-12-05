import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  function About() {
    return (
      <div>Hello</div>
    )
  }
  function Contact() {
    return (
      <div>Hey</div>
    )
  }
  function NoPage() {
    return (
      <div>No Page</div>
    )
  }
  function Home() {
    return (
      <div>Home</div>
    )
  }


  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<NoPage />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
