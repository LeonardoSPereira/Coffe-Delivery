import { useCart } from '../contexts/CartContext'

export function Checkout() {
  const { cart } = useCart()
  return (
    <div>
      <h1 className="text-yellow-dark font-roboto">Checkout</h1>
    </div>
  )
}
