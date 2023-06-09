import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { ROUTES } from '../../utils/routes';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className='header-title'>
        <Image src='/images/lord-of-the-rings-icon-13.png' alt='LOTR ring' width={30} height={30} />
        <h1><Link href={ROUTES.home}>LOTR Database</Link></h1>
      </header>
      <main>{children}</main>
    </>
  );
}
