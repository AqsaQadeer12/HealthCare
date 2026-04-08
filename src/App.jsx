import React from 'react'
import Navbar from './Components/Shared/Navbar'
import MainPage from './Components/MainPage'
import ICU from './Components/ICU'
import Emergency from './Components/Emergency'
import Neurology from './Components/Neurology'
import Pediatrics from './Components/Pediatrics'
import Oncology from './Components/Oncology'
import Laboratory from './Components/Laboratory'
import Pharmacy from './Components/Pharmacy'
import Signup from './Components/Signup'
import Login from './Components/login'
import Patients from './Components/Patients'
import Settings from './Components/Setting'
import Footer from './Components/Shared/Footer'
import Reports from './Components/Reports'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/patient" element={<Patients />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Reports" element={<Reports />} />
                <Route path="/icu" element={<ICU />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/neurology" element={<Neurology />} />
                <Route path="/pediatrics" element={<Pediatrics />} />
                <Route path="/oncology" element={<Oncology />} />
                <Route path="/laboratory" element={<Laboratory />} />
                <Route path="/pharmacy" element={<Pharmacy />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App