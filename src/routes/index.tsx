import { Routes, Route } from 'react-router-dom'
import { Checkout } from '../pages/Checkout'
import { Confirmation } from '../pages/Confirmation'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}
