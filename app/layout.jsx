import './globals.css'
import Link from 'next/link'

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
          <Link className='navLink' href='/resume'>Resume</Link>
          <Link className='navLink' href='/ecommerce'>E-Commerce</Link>
          <Link className='navLink' href='/smallbiz'>Small Biz</Link>
          <Link className='navLink' href='/backgammon'>Backgammon</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
