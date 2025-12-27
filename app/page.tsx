import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getNewProducts, getBestProducts, categories } from '@/lib/data'

export default function Home() {
  const newProducts = getNewProducts()
  const bestProducts = getBestProducts()

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide">
            Everyday style, redefined
          </h1>
          <Link
            href="/products"
            className="inline-block mt-8 px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            상품 보기
          </Link>
        </div>
      </section>

      {/* 신상품 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">신상품</h2>
            <p className="text-gray-600">새로운 시즌 컬렉션을 만나보세요</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block text-sm font-medium text-gray-900 border-b border-gray-900 hover:border-transparent transition-colors"
            >
              전체 상품 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">카테고리</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group"
              >
                <div className="aspect-square bg-white overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{category.name}</span>
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-gray-900">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 베스트 아이템 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">베스트 아이템</h2>
            <p className="text-gray-600">가장 인기 있는 상품들</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {bestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 브랜드 무드 이미지 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200"
                alt="Brand mood"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200"
                alt="Brand mood"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

