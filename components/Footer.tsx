import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">FASHION</h3>
            <p className="text-sm text-gray-600">
              Everyday style, redefined
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">메뉴</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  상품
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  브랜드 소개
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  문의
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">문의</h4>
            <p className="text-sm text-gray-600">
              contact@fashionstore.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; 2024 Fashion Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


