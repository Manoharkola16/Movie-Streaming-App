import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';


const App = () => {
  return (
    <div>
        <AppRoutes />
        
    </div>
  )
}

export default App