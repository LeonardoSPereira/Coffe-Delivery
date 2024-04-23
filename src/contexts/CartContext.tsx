import { ReactNode, createContext, useContext, useState } from 'react'
import { toast } from 'sonner'

interface ProductProps {
  id: number
  imgPath: string
  title: string
  price: number
  quantity: number
}

interface AddressProps {
  zip: string
  street: string
  number?: string
  complement?: string
  city: string
  state: string
  uf: string
}

interface CartProps {
  products: ProductProps[]
  address: AddressProps
  paymentMethod: 'credit' | 'debit' | 'cash' | ''
}

interface CartContextProps {
  cart: CartProps
  addProductsToCart: (product: ProductProps) => void
  removeProductsFromCart: (productId: number) => void
  addAddressToCart: (address: AddressProps) => void
  changePaymentMethod: (paymentMethod: 'credit' | 'debit' | 'cash') => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProps>({
    products: [],
    address: {
      zip: '',
      street: '',
      city: '',
      state: '',
      uf: '',
    },
    paymentMethod: '',
  })

  // function to add product to cart
  function addProductsToCart(productToCart: ProductProps) {
    // check if product is already in cart
    const productInCart = cart.products.find(
      (item) => item.id === productToCart.id,
    )

    // if product is already in cart, throw error
    if (productInCart) {
      toast.error('Produto já adicionado ao carrinho.')
      return
    }

    // if product is not in cart, add it to cart
    setCart((prevState) => ({
      ...prevState,
      products: [...prevState.products, productToCart],
    }))

    // return success message
    toast.success('Produto adicionado ao carrinho.')
  }

  // function to remove product from cart
  function removeProductsFromCart(productId: number) {
    // filter cart to remove product
    const filteredProducts = cart.products.filter(
      (item) => item.id !== productId,
    )

    // set new cart
    setCart((prevState) => ({
      ...prevState,
      products: filteredProducts,
    }))

    toast.success('Produto removido do carrinho.')
  }

  function addAddressToCart(address: AddressProps) {
    setCart((prevState) => ({
      ...prevState,
      address,
    }))
  }

  function changePaymentMethod(paymentMethod: 'credit' | 'debit' | 'cash') {
    setCart((prevState) => ({
      ...prevState,
      paymentMethod,
    }))
  }

  function clearCart() {
    setCart({
      products: [],
      address: {
        zip: '',
        street: '',
        city: '',
        state: '',
        uf: '',
      },
      paymentMethod: '',
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductsToCart,
        removeProductsFromCart,
        addAddressToCart,
        changePaymentMethod,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
