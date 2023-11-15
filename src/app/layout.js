// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // required. see: https://fontawesome.com/v6/docs/web/use-with/react/use-with#next-js

// Google fonts
import { Roboto_Condensed, Noto_Sans, Rubik } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-roboto-condensed',
});

const notoSans = Noto_Sans({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-noto-sans',
});

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-rubik',
});

// Styles
import '../styles/global.scss'

// Metadata
export const metadata = {
  title: 'Welcome to The Fresh Grocer',
}

import Header from './components/Header'
import Footer from './components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${notoSans.variable} ${rubik.variable}`}>

        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
