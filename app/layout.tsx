import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cameo - Book Personalized Video Shoutouts',
  description: 'Book personalized video shoutouts from your favorite celebrities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
