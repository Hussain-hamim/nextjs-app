import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 text-gray-600 p-5 mb-2'>
      <Link className='mr-5' href='/'>
        Next.js
      </Link>
      <Link className='mr-5' href='/users'>
        Users
      </Link>
      <Link href='/admin'>Admin</Link>
    </div>
  );
};

export default NavBar;
