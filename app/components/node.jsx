
'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })



export default function Node({ type }) {
  const [angleRemainging, setAngleRemaining] = useState(2*Math.PI)
  const [selectionRange, setSelectionRange] = useState(0.1 + Math.random() * 0.05);
  const [radiusRange, setRadiusRange] = useState(0.4 + Math.random() * 0.2);
  const [radiusOffset, setRadiusOffset] = useState(0.05 + Math.random() * 0.1);
  const [controlPointSelectionAngle, setControlPointSelectionAngle] = useState(null);
  const [intensity, setIntensity] = useState(null);



  let palette = {
    primary: 'hsla(248, 34%, 26%, 1.0)',
    secondary: 'hsla(0, 0%, 97%, 1.0)',
    ternary: 'hsla(3, 80%, 52%, 1.0)',
    quaternary: 'hsla(4, 82%, 66%, 1.0)'
  }

  const handleRandomSelection = (angleRange, ) => {
    const startAngle = 0
  }



  useEffect(() => {
    
  }, [])

  return (
    <div 
      className={styles.node}>
      <svg 
        className={styles.node} 
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          //SVG 1
          <path 
          fill="rgba(0, 0, 0, 0)"
          stroke={palette[type]}
          height='auto'
          width='auto'
          // d={blobPathData}
          d="
          M  2.7  -3.4

          C  4.6  -3.5     8      -5.1     14.5    -4.7

          c  6.5   .3      16      2.5     20.9     7.5 
             4.8    5      5       12.8    .5       16.7
            -4.4    3.8   -13.5    3.8    -20.2      3.2   
            -6.8   -.6    -11.2   -1.8    -14.2     -4.3   
            -3     -2.6   -4.5    -6.6    -6.4      -8.8    
            -2     -2.1   -4.4    -2.5    -6.4      -3.8
            -2.1   -1.3   -3.8    -3.6    -6.3      -7.2
            -2.5   -3.7   -5.7    -8.8    -5.1     -12.7
              .6   -3.8    5      -6.4     9.4      -4.8

          C -8.9  -17.2  -4.4    -11.4    -2        -7.8
              .4   -4.3    .8     -3.2     2.7      -3.4
          z
          "
          transform="translate(50 50)"
          />
          //SVG 2
          <path 
          fill="rgba(0, 0, 0, 0)"
          stroke={palette[type]}
          height='auto'
          width='auto'
          // d={blobPathData}
          d="
            M  13.2,  -18.8
            C  18.2,-19.9,24.2,-18.7,26.7,-15.2
            C  29.2,-11.6,28.1,-5.8,28.7,0.3
            C  29.3,6.5,31.4,12.9,29.9,18.2
            C  28.4,23.4,23.2,27.3,17.6,29.3
            C  12,31.4,6,31.6,1.9,28.2
            C  -2.1,24.9,-4.2,17.9,-11.4,16.8
            C  -18.6,15.7,-30.9,20.3,-34.1,18.5
            C  -37.3,16.6,-31.4,8.3,-29.6,1.1
            C  -27.7,-6.2,-29.9,-12.3,-27.2,-15.1
            C  -24.5,-17.8,-17,-17.2,-11.7,-16
            C  -6.4,-14.8,-3.2,-13.1,0.4,-13.8
            C  4.1,-14.6,8.1,-17.8,13.2,-18.8
            Z
            "
          transform="translate(50 50)"
          />
          //SVG 3
          <path 
          fill="rgba(0, 0, 0, 0)"
          stroke="black"
          height='auto'
          width='auto'
          // d={blobPathData}
          d="
          M6.5,-9.7
          C12.6,-7.8,24.6,-14.5,31.9,-14.3
          C39.1,-14.1,41.6,-7.1,37.4,-2.4
          C33.1,2.2,22.2,4.4,18.1,10
          C14,15.6,16.7,24.6,14.8,26.3
          C12.9,28,6.5,22.4,2.6,17.9
          C-1.2,13.3,-2.4,9.8,-3.7,7.7
          C-5,5.7,-6.3,5,-9.2,4
          C-12.1,2.9,-16.5,1.5,-22,-3.1
          C-27.4,-7.7,-33.8,-15.5,-34.1,-22.1
          C-34.5,-28.7,-28.7,-34.2,-22,-35.7
          C-15.3,-37.3,-7.6,-34.9,-3.7,-28.5
          C0.2,-22.1,0.4,-11.6,6.5,-9.7
          Z" 
          transform="translate(50 50)"
          />
          //Starting Point 1
          <circle cx="2.7" cy="-3.4" 
            r="1" stroke="black" strokeWidth="0.5" fill="red"
            transform='translate(50 50)'
            />
          //Starting Point 2
          <circle cx="13.2" cy="-18.8" 
            r="1" stroke="black" strokeWidth="0.5" fill="red"
            transform='translate(50 50)'
            />
          //Starting Point 3
          <circle cx="6.5" cy="-9.7" 
            r="1" stroke="black" strokeWidth="0.5" fill="red"
            transform='translate(50 50)'
            />
        </g>
 
      </svg>
    </div>

  )
}
