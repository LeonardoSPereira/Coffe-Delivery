import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { CartProvider } from './contexts/CartContext'
import './index.css'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Toaster richColors closeButton />
        <Router />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
