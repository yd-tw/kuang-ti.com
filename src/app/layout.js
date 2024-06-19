import './globals.css'
import { Inter } from 'next/font/google'
import Analytics from './Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '楊光地',
  description: '在這裡能找到關於楊光地的一切',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
