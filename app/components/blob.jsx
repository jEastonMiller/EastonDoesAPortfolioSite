'use client'

import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import { useState, useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] });

export default function Blob({ color, size, growth, edges, paths, opacity, floatList, sort, colorSortList }) {
  const [path, setPath] = useState(null);
  const [position, setPosition] = useState(null);
  const [degree, setDegree] = useState(Math.floor(Math.random() * 12) + 1);
  

  const  handlePathMorph= function() {
    // const pathCache = JSON.parse(JSON.stringify(paths))
    // const pathIndex = pathCache.indexOf(path);
    setPath(paths[1]);
    setPosition(floatList[1]);

  }

  useEffect(() => {
    if(sort === 'color') setPosition(colorSortList[0]);
    console.log('sort: ', sort)
  }, [])

  useEffect(() => {
    const morphPath = setTimeout(() => {
      let pathIndex = paths.indexOf(path);
      pathIndex + 1 === paths.length ? setPath(paths[0]) : setPath(paths[pathIndex + 1]);
    }, Math.floor(Math.random() * 500) + 7500)
  }, [path])

  useEffect(() => {
    let positionList;
    if (sort === null) positionList = floatList;
    if (sort === 'color') positionList = colorSortList;

    
    const morphPosition = setTimeout(() => {
      const positionIndex = positionList.indexOf(position);
      positionIndex + 1 === positionList.length ? setPosition(positionList[0]) : setPosition(positionList[positionIndex + 1]);

    }, Math.floor(Math.random() * 500) + 3000)

  }, [position])

  // useEffect(() => {
  //   const morphDegree = setTimeout(() => {
  //     Math.random() > 0.5 ? setDegree(-Math.floor(Math.random() * 50) + 1) : setDegree(Math.floor(Math.random() * 12) + 1);
  //   }, 200)
  // }, [degree])

  useEffect(() => {
    console.log('floatList: ', floatList);
    setPath(paths[0]);
    setPosition(floatList[0]);
    handlePathMorph();
  }, [])

  if (path) {
    return (
    <div
      className={styles.nodeContainer}
      style={
        {
          height: `calc(${size} / 13 * 1em)`,
          width: `calc(${size} / 13 * 1em)`,
          // height: '13em',
          // width: '13em',
          position: 'absolute',
          top: position.top,
          left: position.left,
          opacity: opacity,
          transform: `rotate(${degree}deg) translate(0 0)`,
          transition: '8s'
        }
      }
    >
      <svg 
        className={styles.node} 
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"

      >
        <g>
        <path 
          fill={color}
          stroke={color}
          height='auto'
          width='auto'
          d={path}
          opacity={opacity}
          style={{
            transition: "8s",
            // animation: "ease-in-out"
          }}
          />
        </g>
 
      </svg>
    </div>
  )
  } else {
    return (
      <div></div>
    )
  }

  
}