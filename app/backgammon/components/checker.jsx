'use client'

import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css'

export default function Checker( { team } ) {
  const { color, setColor } = useState(null)

  useEffect(() => {
    if (team === 'black') setColor('rgba(0, 0, 0, 1.0)');
    //if (team === 'white') setColor('rgba(255, 255, 255, 1.0)');
  }, [])

  return (
    <div 
      className={styles.checker}
      styles={
        {
          background: 'rgba(0, 0, 0, 1.0)',
        }
      }
    >
      
      
    </div>
  )
}
