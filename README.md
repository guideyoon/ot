# Fashion Store - 의류 매장 홈페이지

트렌디한 의류 매장의 감각적인 이미지를 웹사이트를 통해 직관적으로 전달하는 프로젝트입니다.

## 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **배포**: Vercel (권장)

## 주요 기능

- 홈 페이지 (히어로 섹션, 신상품, 카테고리, 베스트 아이템)
- 상품 리스트 페이지 (카테고리 필터링)
- 상품 상세 페이지
- 브랜드 소개 페이지
- 문의 페이지

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
├── app/                  # Next.js App Router 페이지
│   ├── page.tsx         # 홈 페이지
│   ├── products/        # 상품 관련 페이지
│   ├── about/           # 브랜드 소개
│   └── contact/         # 문의
├── components/          # 재사용 가능한 컴포넌트
│   ├── Navigation.tsx   # 네비게이션 바
│   ├── Footer.tsx       # 푸터
│   └── ProductCard.tsx  # 상품 카드
└── lib/                 # 유틸리티 및 데이터
    └── data.ts          # 상품 데이터
```

## 디자인 원칙

- 이미지 중심, 여백 중심, 빠른 탐색 구조
- 모바일 퍼스트 설계
- 미니멀하고 세련된 디자인
- 부드러운 인터랙션

## 라이선스

MIT


