import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { theme } from './config/theme.js'

// Inject theme.js colors as CSS variables on :root
// Change theme.js → changes the entire website color scheme
const root = document.documentElement
Object.entries(theme.colors).forEach(([key, value]) => {
  root.style.setProperty(`--color-${key}`, value)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
