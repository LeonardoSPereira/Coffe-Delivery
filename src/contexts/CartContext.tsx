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
  number: number
  complement?: string
  neighborhood: string
  city: string
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
  increaseProductQuantity: (productId: number) => void
  decreaseProductQuantity: (productId: number) => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProps>({
    products: [],
    address: {
      zip: '',
      street: '',
      number: 0,
      neighborhood: '',
      city: '',
      uf: '',
    },
    paymentMethod: '',
  })

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

  function increaseProductQuantity(productId: number) {
    const updatedProducts = cart.products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        }
      }

      return product
    })

    setCart((prevState) => ({
      ...prevState,
      products: updatedProducts,
    }))
  }

  function decreaseProductQuantity(productId: number) {
    const updatedProducts = cart.products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        }
      }

      return product
    })

    setCart((prevState) => ({
      ...prevState,
      products: updatedProducts,
    }))
  }

  function clearCart() {
    setCart({
      products: [],
      address: {
        zip: '',
        street: '',
        number: 0,
        complement: undefined,
        neighborhood: '',
        city: '',
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
        increaseProductQuantity,
        decreaseProductQuantity,
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
