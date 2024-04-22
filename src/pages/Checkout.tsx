import { Header } from '../components/Header'
import { useCart } from '../contexts/CartContext'

export function Checkout() {
  const { cart } = useCart()
  console.log(cart)

  return (
    <div>
      <Header />

      <main className="w-screen overflow-hidden px-40 py-24">
        <h1 className="text-yellow-dark font-roboto">Checkout</h1>
        <div>
          {cart.products.map((product) => (
            <div key={product.id}>
              <img src={product.imgPath} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
