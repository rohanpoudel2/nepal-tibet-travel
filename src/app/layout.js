import Nav from '@/components/nav/Nav';
import './globals.scss';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import DevelopmentAlert from '@/components/ui/alert/developmentAlert';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <DevelopmentAlert />
        <Toaster />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
