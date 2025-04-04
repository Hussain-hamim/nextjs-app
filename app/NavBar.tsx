'use client';
import { CircleUserRound } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return null;

  return (
    <div className='flex justify-between bg-slate-200 text-gray-600 p-5 mb-2'>
      <div className='space-x-5'>
        <Link className=' link-hover' href='/'>
          Next.js
        </Link>
        <Link className=' link-hover' href='/users'>
          Users
        </Link>
        <Link className='link-hover' href='/admin'>
          Admin
        </Link>
        <Link className='link-hover' href='/upload'>
          Upload
        </Link>
      </div>

      <div className='space-x-3 '>
        {status === 'authenticated' && (
          <div>
            <CircleUserRound
              size={24}
              className='text-gray-600 inline mr-1 mb-1'
            />
            {session.user?.name}
            <Link className='ml-3 link-hover' href='/api/auth/signout'>
              SignOut
            </Link>
          </div>
        )}
        {status === 'unauthenticated' && (
          <>
            <Link href='/api/auth/signin' className='link-hover'>
              Login
            </Link>
            <Link href='/auth/register' className='link-hover'>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
