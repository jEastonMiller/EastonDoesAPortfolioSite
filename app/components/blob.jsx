'use client'

import { Inter } from '@next/font/google'
import styles from '../page.module.scss'
import { useState, useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] });

export default function Blob(
  { 
    color, 
    size, 
    paths, 
    opacity, 
    floatList, 
    sort, 
    colorSortList,
    gridColumn,
    gridRow,
    sizeMod,
   }) {
  const [path, setPath] = useState(null);
  const [position, setPosition] = useState(null);
  const [positionAtt, setPositionAtt] = useState('absolute');
  const [llToggle, setLLToggle] = useState(true);
  

  const  handlePathMorph= function() {
    setTimeout(() => {
      setPath(paths[1]);
      setPosition(floatList[1]);
    }, 0)
  };

  const handleLLToggle = () => {
    setLLToggle(!llToggle)
  }

  useEffect(() => {
    if(sort === 'color') {
      setPosition(colorSortList[0])
      setPositionAtt('Absolute')
    };
    if(sort === 'bst') {
      setPosition({top: 0, left: 0})
      setPositionAtt('')
    }
    if(sort === null) {
      setPosition(paths[0]);
      setPositionAtt('Absolute');
    }
    if(sort === 'll') {
      setPosition({top: 0, left: 0})
      setPositionAtt('')
      // positionList = [{top: 0, left: 0}]
    }
  }, [sort])

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
    if (sort === 'bst' || sort === 'll') {
      
      positionList = [{top: 0, left: 0}]
      return;
    }

    const morphPosition = setTimeout(() => {
      const positionIndex = positionList.indexOf(position);
      positionIndex + 1 === positionList.length ? setPosition(positionList[0]) : setPosition(positionList[positionIndex + 1]);
    }, Math.floor(Math.random() * 500) + 3000)

  }, [position])

  useEffect(() => {
    setPath(paths[0]);
    if(sort !== 'll') setPosition(floatList[0]);
    if (sort === 'll') {
      setPosition({top: 0, left: 0})
      setPositionAtt('')
    }
    handlePathMorph();

  }, [])

  if (path) {
    return (
    <div
      className={styles.nodeContainer}
      style={
        {
          height: `calc((${size} / 13 * 1em) * ${sizeMod})`,
          width: `calc((${size} / 13 * 1em) * ${sizeMod})`,
          gridColumn: gridColumn,
          gridRow: gridRow,
          position: positionAtt,
          top: position.top,
          left: position.left,
          opacity: opacity,
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