import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: '이성훈 포트폴리오',
  description: '웹 프론트엔드 개발자',
  verification: {
    google: "9ntG751XLoNKTLA6V_UaAha1i6CmkVetfQhjZGOY4AM",
  },
  other: {
    "naver-site-verification": "793270ec6d77e1db6c89460a17b8b0c2ad302322"
  },
  openGraph: {
    title: "이성훈 포트폴리오",
    description: "웹 프론트엔드 개발자",
    images: "/thumbnail.webp",
    url: "https://www.leesh9098.site",
    siteName: "이성훈 포트폴리오"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
