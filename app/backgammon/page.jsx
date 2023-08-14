import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'
import Board from './components/board';

export default function backgammon() {
  return (
    <div className={styles.page}>
      <Board />
    </div>
  )
}
