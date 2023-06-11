import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: '100'
})

export const metadata = {
  title: 'The Himalayan Spirit',
  description: 'Productions by The Himalayan Spirit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
