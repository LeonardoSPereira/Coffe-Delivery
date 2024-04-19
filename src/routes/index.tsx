import { Routes, Route } from 'react-router-dom'
import { Success } from '../pages/Success'
import { Checkout } from '../pages/Checkout'
import { Confirmation } from '../pages/Confirmation'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
