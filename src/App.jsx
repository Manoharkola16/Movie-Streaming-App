import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        
    </div>
  )
}

export default App