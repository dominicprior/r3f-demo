import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App>
            <h1>howdy</h1>
            <h2>hey</h2>
        </App>
    </StrictMode>,
);
