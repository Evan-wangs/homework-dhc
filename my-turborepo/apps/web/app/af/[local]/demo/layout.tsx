"use client";

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import styles from './demo.module.css';

export default function Layout({ children }: { children: ReactNode }) {
  const [themeColor, setThemeColor] = useState('#0070f3');

  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ backgroundColor: themeColor }}>
        <h1>WS test</h1>
      </header>
      <div className={styles.main}>
        <aside className={styles.sidebar}>
          <nav>
            <Link href="/af/cn/demo/a">Page A</Link><br />
            <Link href="/af/cn/demo/b">Page B</Link><br />
            <Link href="/af/cn/demo/c">Page C</Link><br />
          </nav>
        </aside>
        <section className={styles.content}>
          {children}
        </section>
      </div>
    </div>
  );
}
