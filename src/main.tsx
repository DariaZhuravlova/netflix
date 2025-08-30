import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainRoutes } from './MainRoutes.jsx'
import { ThemeProvider } from './ThemeProvider.jsx'

// "Я уверен, что тут точно не null или undefined"
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
                <MainRoutes />
        </ThemeProvider>
    </StrictMode>
);
