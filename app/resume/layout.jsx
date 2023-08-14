import React from 'react';
import styles from './styles.module.css';

export default function ResumeLayout({ children }) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
