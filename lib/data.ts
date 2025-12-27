export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  images?: string[]
  description?: string
  sizes?: string[]
}

export const categories = [
  { 
    id: 'outer', 
    name: '아우터',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600'
  },
  { 
    id: 'top', 
    name: '상의',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600'
  },
  { 
    id: 'bottom', 
    name: '하의',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600'
  },
  { 
    id: 'dress', 
    name: '원피스',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600'
  },
  { 
    id: 'accessory', 
    name: '액세서리',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600'
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: '클래식 코트',
    price: 189000,
    category: 'outer',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
    ],
    description: '시즌을 넘나드는 클래식한 코트입니다.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '2',
    name: '슬림핏 니트',
    price: 89000,
    category: 'top',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800',
    ],
    description: '부드럽고 따뜻한 슬림핏 니트입니다.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '3',
    name: '스키니 진',
    price: 79000,
    category: 'bottom',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
    ],
    description: '편안한 착용감의 스키니 진입니다.',
    sizes: ['26', '28', '30', '32'],
  },
  {
    id: '4',
    name: '미디 원피스',
    price: 129000,
    category: 'dress',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800',
    ],
    description: '우아하고 세련된 미디 원피스입니다.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '5',
    name: '가죽 크로스백',
    price: 159000,
    category: 'accessory',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    ],
    description: '모던한 디자인의 가죽 크로스백입니다.',
  },
  {
    id: '6',
    name: '후드 집업',
    price: 99000,
    category: 'outer',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
    ],
    description: '캐주얼하고 편안한 후드 집업입니다.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '7',
    name: '라운드 티셔츠',
    price: 49000,
    category: 'top',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    ],
    description: '베이직한 라운드 티셔츠입니다.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '8',
    name: '와이드 팬츠',
    price: 89000,
    category: 'bottom',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800',
    ],
    description: '트렌디한 와이드 팬츠입니다.',
    sizes: ['S', 'M', 'L'],
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (!category) return products
  return products.filter((product) => product.category === category)
}

export const getBestProducts = (): Product[] => {
  return products.slice(0, 4)
}

export const getNewProducts = (): Product[] => {
  return products.slice(0, 4)
}

