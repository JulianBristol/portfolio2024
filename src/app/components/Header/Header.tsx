import React, { FC } from 'react';
import Image from 'next/image';

const Header = ({}) => {
  return (
    <header className='p-4 flex justify-between font-semibold border-poppy border-y-[0.5px] bg-ghost'>
        <Image
        className="relative "
        src="/logo.svg"
        alt="Next.js Logo"
        width={27}
        height={27}
        priority
      />
        <ul>
            <li className='inline ml-2'>
                <a href='#about'>about</a>
            </li>
            <li className='inline ml-2'>
                <a href='#history'>history</a>
            </li>
            <li className='inline ml-2'>
                <a href='#portfolio'>portfolio</a>
            </li>
            <li className='inline ml-2'>
                <a href='#contact'>contact</a>
            </li>
        </ul>
    </header>
)}

export default Header