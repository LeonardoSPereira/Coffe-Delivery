interface ProductsProps {
  id: number
  imgPath: string
  tag: string[]
  title: string
  description: string
  price: string
}

export const productsInfo: ProductsProps[] = [
  {
    id: 1,
    imgPath: '../../public/expresso-tradicional.svg',
    title: 'Expresso tradicional',
    tag: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: 5,
    imgPath: '../../public/cafe-com-leite.svg',
    title: 'Café com leite',
    tag: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
]
