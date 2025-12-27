import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '브랜드 소개 | Fashion Store',
  description: '우리는 매일 입을 수 있는 옷을 만듭니다. 트렌드와 실용성의 균형을 중요하게 생각합니다.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 히어로 섹션 */}
        <div className="mb-20">
          <div className="relative aspect-[16/9] mb-12 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="About us"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-8">브랜드 소개</h1>
        </div>

        {/* 콘텐츠 섹션 */}
        <div className="space-y-16">
          <section className="space-y-6">
            <h2 className="text-2xl font-light">우리는 매일 입을 수 있는 옷을 만듭니다</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              패션은 하루하루를 더 의미 있게 만들어주는 표현입니다. 
              우리는 복잡하지 않고, 실용적이면서도 스타일리시한 의류를 디자인합니다. 
              특별한 날뿐만 아니라 평범한 일상에서도 자신감을 주는 옷을 제공하는 것이 우리의 목표입니다.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-light">트렌드와 실용성의 균형</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              최신 트렌드를 반영하되, 일상에서 부담 없이 입을 수 있는 디자인을 추구합니다. 
              과하지 않은 세련됨과 편안한 착용감을 동시에 만족시키는 제품을 선보입니다.
            </p>
          </section>

          <section>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
                alt="Brand philosophy"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-light">우리의 약속</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              고객이 자신만의 스타일을 찾고 표현할 수 있도록 돕는 것이 우리의 사명입니다. 
              단순한 의류 판매를 넘어, 라이프스타일의 일부가 되는 브랜드가 되고자 합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

