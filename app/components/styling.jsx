
'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function Styling() {
  const [initiate, setInitiate] = useState(false);
  const [scale, setScale] = useState(1);
  const [capWidth, setCapWidth] = useState(122 * scale);
  const [capHeight, setCapHeight] = useState(60 * scale);
  const [nogginWidth, setNogginWidth] = useState(200 * scale);
  const [nogginHeight, setNogginHeight] = useState(150 * scale);
  const [miniWidth, setMiniWidth] = useState(75 * scale);
  const [miniHeight, setMiniHeight] = useState(75 * scale);

  const handleImageSize = (scale) => {
    setCapWidth(122 * scale);
    setCapHeight(60 * scale);
    setNogginWidth(200 * scale);
    setNogginHeight(150 * scale);
    setMiniWidth(75 * scale);
    setMiniHeight(75 * scale);
  }

  useEffect(() => {
    setScale(1.0);
  }, [])

  return (
    <div className='styling'>
      <Image
        id='nav1'
        src="/../public/nav1.svg"
        width={100}
        height={60}
        alt="background styling"
      />
     
    </div>

  )
}
