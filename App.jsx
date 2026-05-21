import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Navbar from './components/Navbar.jsx'
import Toast from './components/Toast.jsx'

export const ApiKeyContext = React.createContext('')
export const ToastContext = React.createContext(()=>{})
export const AuthContext = React.createContext(null)

export default function App() {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '')
  const [toast, setToast] = useState(null)
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem('nv_session')) } catch { return null } })

  const showToast = (msg, type='') => { setToast({ msg, type, id: Date.now() }) }
  const login = (u) => { setUser(u); localStorage.setItem('nv_session', JSON.stringify(u)) }
  const logout = () => { setUser(null); localStorage.removeItem('nv_session') }

  return (
    <ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
      <ToastContext.Provider value={showToast}>
        <AuthContext.Provider value={{ user, login, logout }}>
          <BrowserRouter>
            <div className="min-h-screen relative">
              <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />
              <div className="noise" />
              <div className="relative z-10">
                <Navbar />
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                  </Routes>
                </AnimatePresence>
              </div>
              {toast && <Toast key={toast.id} msg={toast.msg} type={toast.type} />}
            </div>
          </BrowserRouter>
        </AuthContext.Provider>
      </ToastContext.Provider>
    </ApiKeyContext.Provider>
  )
}
