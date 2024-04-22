import { MapPin, ShoppingCart } from 'phosphor-react'
import { LogoSvg } from '../assets/Logo'
import { NavLink } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export function Header() {
  const { cart } = useCart()

  return (
    <header className="flex items-center justify-between px-40 py-8">
      <LogoSvg />

      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-1 p-2 rounded-md bg-purple-light">
          <MapPin size={24} weight="fill" className="text-purple" />
          <p className="text-purple-dark text-sm leading-4 font-normal">
            Porto Alegre, RS
          </p>
        </div>

        <NavLink
          to="/checkout"
          className="p-2 rounded-md z-10 relative bg-yellow-light text-yellow-dark cursor-pointer hover:bg-yellow hover:text-yellow-light"
        >
          <ShoppingCart size={24} weight="fill" />
          {cart.products.length > 0 && (
            <span className="absolute z-10 -top-2 -right-1 size-5 rounded-full bg-yellow-dark flex items-center justify-center text-white font-bold">
              {cart.products.length}
            </span>
          )}
        </NavLink>
      </div>
    </header>
  )
}
