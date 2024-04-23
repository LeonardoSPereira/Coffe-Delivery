import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../contexts/CartContext'

interface ProductItemProps {
  productId: number
  imgPath: string
  title: string
  price: number
  quantity: number
}

export function ProductItem({
  productId,
  imgPath,
  title,
  price,
  quantity,
}: ProductItemProps) {
  const {
    removeProductsFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCart()

  function handleRemoveProductFromCart(id: number) {
    removeProductsFromCart(id)
  }

  function handleIncreaseProductQuantity(id: number) {
    increaseProductQuantity(id)
  }

  function handleDecreaseProductQuantity(id: number) {
    decreaseProductQuantity(id)
  }

  return (
    <div className="flex items-start justify-between px-1">
      <div className="flex items-start gap-5">
        <img className="size-16 rounded-full" src={imgPath} alt="" />

        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="text-base-subtitle">{title}</h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-end gap-2">
              <div className="flex items-center gap-1 p-2 rounded-md bg-base-button">
                <button
                  onClick={() => handleDecreaseProductQuantity(productId)}
                  className="text-purple hover:text-purple-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={quantity <= 1}
                >
                  <Minus weight="bold" size={20} />
                </button>

                <p className="text-base-title">{quantity}</p>

                <button
                  onClick={() => handleIncreaseProductQuantity(productId)}
                  className="text-purple hover:text-purple-dark cursor-pointer"
                >
                  <Plus weight="bold" size={20} />
                </button>
              </div>
            </div>

            <button
              onClick={() => handleRemoveProductFromCart(productId)}
              className="flex items-center gap-1 px-2 py-2.5  rounded-md bg-base-button"
            >
              <Trash size={16} className="text-purple" />
              <span className="text-base-subtitle text-xs leading-5 uppercase">
                Remover
              </span>
            </button>
          </div>
        </div>
      </div>

      <p className="ml-12 text-base-text font-bold">
        {(price * quantity).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </div>
  )
}
