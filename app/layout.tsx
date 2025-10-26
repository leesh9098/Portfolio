import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: '이성훈',
  description: '웹 프론트엔드 개발자'
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
