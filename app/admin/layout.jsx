import React from 'react';
import styles from './styles.module.css';

export default function AdminLayout({ children }) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
