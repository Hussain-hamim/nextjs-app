'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return null;

  return (
    <div className='flex bg-slate-200 text-gray-600 p-5 mb-2 space-x-3'>
      <Link className='mr-5' href='/'>
        Next.js
      </Link>
      <Link className='mr-5' href='/users'>
        Users
      </Link>
      <Link href='/admin'>Admin</Link>
      {status === 'authenticated' && <div>{session.user?.name}</div>}
      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin'>Login</Link>
      )}
    </div>
  );
};

export default NavBar;
