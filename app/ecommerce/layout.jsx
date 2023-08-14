import React from 'react';
import styles from './styles.module.css';

export default function EcommerceLayout({ children }) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}