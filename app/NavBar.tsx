import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className='flex'>
      <Link className='mr-5' href='/'>
        Next.js
      </Link>
      <Link href='/users'>Users</Link>
    </div>
  );
};

export default NavBar;
