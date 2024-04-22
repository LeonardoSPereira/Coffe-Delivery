import { ReactNode, createContext, useContext, useState } from 'react'
import { toast } from 'sonner'

interface ProductProps {
  id: number
  imgPath: string
  title: string
  price: number
  quantity: number
}

interface CartContextProps {
  cart: ProductProps[]
  addToCart: (product: ProductProps) => void
  removeFromCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductProps[]>([])

  // function to add product to cart
  function addToCart(productToCart: ProductProps) {
    // check if product is already in cart
    const productInCart = cart.find((item) => item.id === productToCart.id)

    // if product is already in cart, throw error
    if (productInCart) {
      toast.error('Produto já adicionado ao carrinho.')
      return
    }

    // if product is not in cart, add it to cart
    setCart((prevState) => [...prevState, productToCart])

    // return success message
    toast.success('Produto adicionado ao carrinho.')
  }

  // function to remove product from cart
  function removeFromCart(productId: number) {
    // filter cart to remove product
    const newCart = cart.filter((item) => item.id !== productId)

    // set new cart
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
