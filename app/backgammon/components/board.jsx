'use client'

import React, { useEffect, useState } from 'react'
import styles from '../styles.module.css'
import Triangle from './triangle'
import Checker from './checker'

export default function Board() {
  const {board, setBoard} = useState(null)

  return (
    <div className={styles.board}>
      
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <div></div>
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      
    </div>
  )
}
