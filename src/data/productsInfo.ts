export interface ProductProps {
  id: number
  imgPath: string
  tags: string[]
  title: string
  description: string
  price: number
}

export const productsInfo: ProductProps[] = [
  {
    id: 1,
    imgPath: '../../src/assets/expresso-tradicional.svg',
    title: 'Expresso tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    imgPath: '../../src/assets/expresso-americano.svg',
    title: 'Expresso americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    imgPath: '../../src/assets/expresso-cremoso.svg',
    title: 'Expresso cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    imgPath: '../../src/assets/expresso-gelado.svg',
    title: 'Expresso gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    imgPath: '../../src/assets/cafe-com-leite.svg',
    title: 'Café com leite',
    tags: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    imgPath: '../../src/assets/latte.svg',
    title: 'Latte',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    imgPath: '../../src/assets/cappuccino.svg',
    title: 'Cappuccino',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    imgPath: '../../src/assets/macchiato.svg',
    title: 'Macchiato',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    imgPath: '../../src/assets/mocaccino.svg',
    title: 'Mocaccino',
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    imgPath: '../../src/assets/chocolate-quente.svg',
    title: 'Chocolate quente',
    tags: ['Especial', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    imgPath: '../../src/assets/cubano.svg',
    title: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    imgPath: '../../src/assets/havaiano.svg',
    title: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    imgPath: '../../src/assets/arabe.svg',
    title: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    imgPath: '../../src/assets/irlandes.svg',
    title: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
