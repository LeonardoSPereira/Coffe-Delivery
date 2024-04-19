import { MapPin, ShoppingCart } from 'phosphor-react'
import { LogoSvg } from '../assets/Logo'
import { NavLink } from 'react-router-dom'

export function Header() {
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
          className="p-2 rounded-md relative bg-yellow-light"
        >
          <ShoppingCart size={24} weight="fill" className="text-yellow-dark" />
          <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-yellow-dark flex items-center justify-center text-white font-bold">
            3
          </span>
        </NavLink>
      </div>
    </header>
  )
}
