import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles/index.scss';

import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skupka',
  description: 'Grand Gold project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.mainContainer}>{children}</main>
      </body>
    </html>
  );
}
