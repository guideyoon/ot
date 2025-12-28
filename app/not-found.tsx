import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-light mb-4">404</h1>
        <p className="text-gray-600 mb-8">페이지를 찾을 수 없습니다.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}


