import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '매장 안내 | Fashion Store',
  description: '오프라인 매장 위치 및 방문 안내',
}

export default function StorePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">매장 안내</h1>
          <p className="text-gray-600">오프라인 매장을 방문해보세요</p>
        </div>

        {/* 매장 이미지 */}
        <div className="mb-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="매장 외관"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 매장 정보 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-6">매장 정보</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">주소</h3>
                  <p className="text-gray-600 leading-relaxed">
                    서울특별시 강남구 테헤란로 123<br />
                    패션빌딩 1층
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">영업시간</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>월요일 ~ 금요일: 10:00 - 20:00</p>
                    <p>토요일: 10:00 - 21:00</p>
                    <p>일요일: 12:00 - 20:00</p>
                    <p className="text-sm text-gray-500 mt-2">※ 공휴일 영업시간은 별도 공지</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">연락처</h3>
                  <p className="text-gray-600">
                    전화: 02-1234-5678
                  </p>
                </div>
              </div>
            </div>

            {/* 교통 안내 */}
            <div>
              <h2 className="text-2xl font-light mb-6">교통 안내</h2>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">지하철</h3>
                  <p>2호선 강남역 3번 출구 도보 5분<br />9호선 신논현역 1번 출구 도보 3분</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">버스</h3>
                  <p>간선: 146, 241, 463<br />지선: 3412, 6411</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">주차</h3>
                  <p>
                    매장 건물 지하 주차장 이용 가능<br />
                    구매 시 2시간 무료 주차 (영수증 제시)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 지도 */}
          <div>
            <h2 className="text-2xl font-light mb-6">위치</h2>
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {/* 지도는 실제로는 카카오맵이나 구글맵을 임베드하거나 iframe으로 사용 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.681942535081!2d127.0276108!3d37.4979422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15aee9ab0cb%3A0x31793fc62a190219!2z6rK96riw64-EIOyEnOyauO2ZlOy5tOydmOq1rCDsg4zsg4zsg4zsg4zslrTsoJA!5e0!3m2!1sko!2skr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            
            <div className="mt-6">
              <a
                href="https://map.kakao.com/?q=강남역"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-gray-600 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
              >
                카카오맵에서 보기 →
              </a>
            </div>
          </div>
        </div>

        {/* 매장 내부 이미지 */}
        <div className="mt-16">
          <h2 className="text-2xl font-light mb-8 text-center">매장 내부</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
                alt="매장 내부 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                alt="매장 내부 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

