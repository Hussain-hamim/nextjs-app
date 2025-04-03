'use client';
import { CircleUserRound } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return null;

  return (
    <div className='flex bg-slate-200 text-gray-600 p-5 mb-2 space-x-3'>
      <Link className='mr-5 link-hover' href='/'>
        Next.js
      </Link>
      <Link className='mr-5 link-hover' href='/users'>
        Users
      </Link>
      <Link className='link-hover' href='/admin'>
        Admin
      </Link>
      <Link className='link-hover' href='/upload'>
        Upload
      </Link>
      {status === 'authenticated' && (
        <div>
          <CircleUserRound
            size={24}
            className='text-gray-600 inline mr-1 mb-1'
          />
          {session.user?.name}
          <Link className='ml-3 link-hover' href='/api/auth/signout'>
            Sign Out
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin'>Login</Link>
      )}
    </div>
  );
};

export default NavBar;
