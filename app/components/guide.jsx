
'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function Guide() {
  const [initiate, setInitiate] = useState(false);
  const [scale, setScale] = useState(0.25);
  const [capWidth, setCapWidth] = useState(122 * scale);
  const [capHeight, setCapHeight] = useState(60 * scale);
  const [nogginWidth, setNogginWidth] = useState(200 * scale);
  const [nogginHeight, setNogginHeight] = useState(150 * scale);
  const [miniWidth, setMiniWidth] = useState(75 * scale);
  const [miniHeight, setMiniHeight] = useState(75 * scale);

  // const dcWidth = document.body.clientWidth

  // console.log('client width: ', dcWidth)

  const handleImageSize = (scale) => {
    setCapWidth(122 * scale);
    setCapHeight(60 * scale);
    setNogginWidth(200 * scale);
    setNogginHeight(150 * scale);
    setMiniWidth(75 * scale);
    setMiniHeight(75 * scale);
  }

  useEffect(() => {
    setScale(0.25);
  }, [])

  return (
    <div className='guide'>
      <Image
        className='cap'
        src="/../public/cap.png"
        width={capWidth}
        height={capHeight}
        alt="Skull Cap"
      />
      <Image
        className='noggin'
        src="/../public/noggin.png"
        width={nogginWidth}
        height={nogginHeight}
        alt="Noggin"
      />
      <Image
        className='mini'
        src="/../public/full-head.png"
        width={miniWidth}
        height={miniHeight}
        alt="mini-guide"
      />
    </div>

  )
}
