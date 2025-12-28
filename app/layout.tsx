import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Fashion Store | 트렌디한 의류 매장',
  description: 'Everyday style, redefined. 트렌드와 실용성의 균형을 추구하는 의류 매장',
  openGraph: {
    title: 'Fashion Store | 트렌디한 의류 매장',
    description: 'Everyday style, redefined. 트렌드와 실용성의 균형을 추구하는 의류 매장',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



