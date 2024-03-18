import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import ToastProvider from './provider/ToastProvider.tsx'
import AuthProvider from './context/auth/AuthContext.tsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

      <AuthProvider>

        <ToastProvider />
        <App />

      </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
