import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { SessionProvider } from "next-auth/react"
import AuthProvider from '@/components/authprovider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'This is Nextjs blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
      {/* <body>
        <Navbar />
        {children}
        <Footer />
      </body> */}
    </html>
  )
}
