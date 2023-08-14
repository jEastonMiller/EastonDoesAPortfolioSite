'use client'

import React, { useEffect, useState } from 'react'
import styles from '../styles.module.css'
import Triangle from './triangle'
import Checker from './checker'

export default function Board() {
  const {board, setBoard} = useState([ { 2: 2 }, { }, { }, { }, { }, { 1: 5 }, { }, { 1: 3 }, { }, { }, { }, { 2: 5 },
    { 1: 5 }, { }, { }, { }, { 2: 3 }, { }, { 2: 5 }, { }, { }, { }, { }, { 1: 2 }  ])
  const { boardCache, setBoardCache } = useState(null)
  
  const handleStartGame = () => {
    
  }

  const handleRoll = () => {

  }

  const handleBoardChange = () => {

  }

  const handleCheckMoves = () => {

  }
    
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
