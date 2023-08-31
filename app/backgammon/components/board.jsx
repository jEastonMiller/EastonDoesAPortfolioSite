'use client'

import React, { useEffect, useState } from 'react'
import styles from '../styles.module.css'
import Triangle from './triangle'
import Checker from './checker'

export default function Board() {
  const {board, setBoard} = useState(
                              [ 
                                { 2: 2, state: false }, { state: false }, { state: false }, 
                                { state: false }, { state: false }, { 1: 5, state: false }, 
                                { state: false }, { 1: 3, state: false }, { state: false }, 
                                { state: false }, { state: false }, { 2: 5, state: false },
                                { 1: 5, state: false }, { state: false }, { state: false }, 
                                { state: false }, { 2: 3, state: false }, { state: false }, 
                                { 2: 5, state: false }, { state: false }, { state: false }, 
                                { state: false }, { state: false }, { 1: 2, state: false }  
                              ]
                            )
  const { boardCache, setBoardCache } = useState([])
  const { moves, setMoves } = useState()
  
  const handleStartGame = () => {
    
  }

  const handleRoll = () => {
    const rollOne = Math.floor(Math.random() * 6) + 1;
    const rollTwo = Math.floor(Math.random() * 6) + 1;
  }

  const handleBoardChange = () => {
    const newBoard = JSON.parse(JSON.stringify(board));
    const newBoardCache = JSON.parse(JSON.stringify(boardCache));
    newBoardCache.push(1);
    console.log('before: ', newBoardCache);
    newBoardCache.shift();
    console.log('after: ', newBoardCache)
  }

  const handleCheckMoves = () => {
    
  }

  useEffect(() => {
    function boardBuilder() {

      // initialize a spaceID so that the string can be parsed into a row and
      // column in <Triangle /> component for 
      let spaceID;
      const spaces = [];
      for (let i = 0; i < 24; i++) {
        // if/else determines row. Math.abs will assign it to the right column
        // based on how the board array is organized starting at the end of row 
        // one and working its way to the beginning of row 1 and 2 and then 
        // proceeding to the end of row 2
        if (i < 12) spaceID = `1${Math.abs(-12 + i)}`
        else spaceID = `2${Math.abs(-12 + i)}`
        spaces.push(<Triangle spaceID={spaceID} active={null} />)
      }
    }
  }, [])
    
  return (
    <div className={styles.board}>
      
      
      
    </div>
  )
}
