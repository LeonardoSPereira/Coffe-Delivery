import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ProductProps } from '../data/productsInfo'

export function Product({
  imgPath,
  title,
  description,
  tags,
  price,
}: ProductProps) {
  return (
    <div className="w-64 p-2 bg-base-card rounded-tr-3xl rounded-tl-md rounded-br-md rounded-bl-3xl flex flex-col items-center">
      <img src={imgPath} alt={title} className="size-32 rounded-full mb-3" />
      {tags && (
        <div className="flex items-center gap-1">
          {tags.map((tag, index) => (
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
        {title}
      </h3>

      <p className="text-center text-base-label text-sm mb-8">{description}</p>

      <div className="flex items-center justify-between">
        <p className="text-base-text font-baloo text-xl font-extrabold mr-5">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>

        <div className="flex items-center justify-end gap-2">
          <div className="flex items-center gap-1 p-2 rounded-md bg-base-button">
            <button className="text-purple hover:text-purple-dark">
              <Minus weight="bold" size={20} />
            </button>
            <p className="text-base-title">1</p>
            <button className="text-purple hover:text-purple-dark">
              <Plus weight="bold" size={20} />
            </button>
          </div>

          <button className="p-2 bg-purple-dark text-white rounded-md hover:bg-purple">
            <ShoppingCart weight="fill" size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
