import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: '이성훈',
  description: '웹 프론트엔드 개발자',
  verification: {
    google: "i9-ZXlkBrmJZQVkbmKPb0IXgKopWUf15xr_7nYLS9gU",
  },
  other: {
    "naver-site-verification": "e665925c00d389b22ce7c36058e13717e5ed1322"
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
