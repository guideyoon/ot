import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-gray-900">
          {formatPrice(product.price)}원
        </p>
      </div>
    </Link>
  )
}

