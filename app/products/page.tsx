import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory, categories } from '@/lib/data'

interface ProductsPageProps {
  searchParams: { category?: string }
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams.category || ''
  const products = getProductsByCategory(category)
  const selectedCategory = categories.find((cat) => cat.id === category)

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {selectedCategory ? selectedCategory.name : '전체 상품'}
          </h1>
          <p className="text-gray-600">
            {products.length}개의 상품
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-12 flex flex-wrap gap-4">
          <a
            href="/products"
            className={`px-4 py-2 text-sm font-medium border transition-colors ${
              !category
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'
            }`}
          >
            전체
          </a>
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className={`px-4 py-2 text-sm font-medium border transition-colors ${
                category === cat.id
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* 상품 그리드 */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600">상품이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

