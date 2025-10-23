import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import { Home } from './pages/Home.tsx'
import { Credits } from './pages/Credits.tsx'
import { Pricing } from './pages/Pricing.tsx'
import { Contact } from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </StrictMode >,
)
