import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import ToastProvider from './provider/ToastProvider.tsx'
import { LoadingProvider } from './context/LoadingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <ToastProvider />
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
