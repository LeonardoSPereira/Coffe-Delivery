interface ProductProps {
  imgPath: string
}

export function Product({ imgPath }: ProductProps) {
  return (
    <div className="w-64 bg-base-card rounded-tr-md rounded-tl-['36px'] rounded-br-['36px'] rounded-bl-md">
      <img src={imgPath} alt="" />
    </div>
  )
}
