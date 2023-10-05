'use client'

import React, { useEffect, useState } from 'react'
import styles from '../styles.module.css'

export default function Triangle( { spaceID, active } ) {
  const { row, setRow } = useState(null);
  const { column, setColumn } = useState(null);

  useEffect(() => {
    // parse row and column for grid css
    setRow(spaceID[0])
    setColumn(spaceID.slice(1, Infinity))
  }, [])

  return (
    <div 
      className={styles.space}
      styles={
        {
          gridColumn: `span ${column}/${column + 1}`,
          gridRow: `span ${row}/${row + 1}`
        }
      }
    >
      {/* <svg class={styles.triangleViewBox}>
		    <polygon points="100,125 0,480 195,480" class={styles.triangle} />
	    </svg> */}
    
    </div>
  )
}
