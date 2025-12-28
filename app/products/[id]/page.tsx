import Image from 'next/image'
import Link from 'next/link'
import { getProductById, products } from '@/lib/data'
import { notFound } from 'next/navigation'

interface ProductDetailPageProps {
  params: { id: string }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const images = product.images || [product.image]
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  // 다음/이전 상품 찾기
  const currentIndex = products.findIndex((p) => p.id === params.id)
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 브레드크럼 */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            홈
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-900">
            상품
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* 이미지 갤러리 */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <Image
                src={images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 상품 정보 */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-light mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-gray-900">
                {formatPrice(product.price)}원
              </p>
            </div>

            {product.description && (
              <div>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  사이즈
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-6 py-2 border border-gray-300 text-sm font-medium hover:border-black transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-4 px-8 font-medium hover:bg-gray-900 transition-colors">
                문의하기
              </button>
            </div>
          </div>
        </div>

        {/* 다음/이전 상품 네비게이션 */}
        {(prevProduct || nextProduct) && (
          <div className="border-t border-gray-200 pt-12 mt-20">
            <div className="flex justify-between items-center">
              {prevProduct ? (
                <Link
                  href={`/products/${prevProduct.id}`}
                  className="group flex items-center space-x-4"
                >
                  <div className="relative w-20 h-20 overflow-hidden">
                    <Image
                      src={prevProduct.image}
                      alt={prevProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">이전 상품</p>
                    <p className="text-sm font-medium group-hover:underline">
                      {prevProduct.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
              {nextProduct && (
                <Link
                  href={`/products/${nextProduct.id}`}
                  className="group flex items-center space-x-4 text-right"
                >
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">다음 상품</p>
                    <p className="text-sm font-medium group-hover:underline">
                      {nextProduct.name}
                    </p>
                  </div>
                  <div className="relative w-20 h-20 overflow-hidden">
                    <Image
                      src={nextProduct.image}
                      alt={nextProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


