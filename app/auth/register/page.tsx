'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });

    if (res.ok) {
      // ✅ Auto login the user after successful registration
      const result = await signIn('credentials', {
        redirect: true,
        name,
        email,
        password,
        callbackUrl: '/', // Or wherever you want to send them
      });
    } else {
      const data = await res.json();
      alert(data.message || 'Something went wrong');
    }
  };

  return (
    <div className='flex justify-center'>
      <form
        onSubmit={submitHandler}
        className=' form fieldset w-100 gap-5 flex flex-col bg-cyan-950 p-10 rounded-2xl'
      >
        <h1>Register</h1>
        <input
          className=' bg-gray-700 rounded-2xl text-2xl p-3 '
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder='email'
          className=' bg-gray-700 rounded-2xl text-2xl p-3'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder='password'
          className=' bg-gray-700 rounded-2xl text-2xl p-3'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='btn ' type='submit'>
          Register
        </button>
        <Link href='/api/auth/signin' className='link-hover font-bold'>
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}
