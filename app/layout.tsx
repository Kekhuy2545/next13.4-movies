import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='container mx-auto mt-7'>
          {children}
        </div>
        
        <footer>
        <h2 className="flex min-h-screen flex-col items-center justify-between p-24">By Jukkoo</h2>
        </footer>
        </body>
    </html>
  )
}
