import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useCart } from '../contexts/CartContext'
interface ProductInfoCardProps {
  id: number
  imgPath: string
  title: string
  description: string
  price: number
  tags?: string[]
}

interface ProductCardProps {
  data: ProductInfoCardProps
}
export function Product({ data }: ProductCardProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseProductQuantity() {
    setQuantity((prevState) => prevState + 1)
  }

  function handleDecreaseProductQuantity() {
    setQuantity((prevState) => prevState - 1)
  }

  function handleAddProductToCart() {
    addToCart({
      id: data.id,
      imgPath: data.imgPath,
      title: data.title,
      price: data.price,
      quantity,
    })
  }

  return (
    <div className="w-64 p-2 bg-base-card rounded-tr-3xl rounded-tl-md rounded-br-md rounded-bl-3xl flex flex-col items-center">
      <img
        src={data.imgPath}
        alt={data.title}
        className="size-32 rounded-full mb-3"
      />
      {data.tags && (
        <div className="flex items-center gap-1">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="p-2 rounded-full bg-yellow-light text-xs text-yellow-dark font-bold leading-3 uppercase mb-4"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h3 className="font-baloo text-base-subtitle text-xl font-bold mb-2">
        {data.title}
      </h3>

      <p className="text-center text-base-label text-sm mb-8">
        {data.description}
      </p>

      <div className="flex items-center justify-between">
        <p className="text-base-text font-baloo text-xl font-extrabold mr-5">
          {data.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>

        <div className="flex items-center justify-end gap-2">
          <div className="flex items-center gap-1 p-2 rounded-md bg-base-button">
            <button
              className="text-purple hover:text-purple-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleDecreaseProductQuantity}
              disabled={quantity <= 1}
            >
              <Minus weight="bold" size={20} />
            </button>

            <p className="text-base-title">{quantity}</p>

            <button
              className="text-purple hover:text-purple-dark cursor-pointer"
              onClick={handleIncreaseProductQuantity}
            >
              <Plus weight="bold" size={20} />
            </button>
          </div>

          <button
            className="p-2 bg-purple-dark text-white rounded-md hover:bg-purple"
            onClick={handleAddProductToCart}
          >
            <ShoppingCart weight="fill" size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
