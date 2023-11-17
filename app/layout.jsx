import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Styling from './components/styling'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className='mainNav'>
          {/* <div className='navLink'>
            <Styling />
            <Link id='navLink1' className='navLink' href='/resume'>Resume</Link>
          </div> */}
          
          {/* <Link id='navLink2' className='navLink' href='/ecommerce'>E-Commerce</Link>
          <Link id='navLink3' className='navLink' href='/smallbiz'>Small Biz</Link>
          <Link id='navLink4' className='navLink' href='/backgammon'>Backgammon</Link> */}
        </nav>
        {children}
      </body>
    </html>
  )
}
