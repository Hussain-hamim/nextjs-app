import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

// run in production: npm start
// run in development: npm run dev

// Rendering: 1) client-side: browser, 2) server-side: server => faster load time => two types of rendering
// server-side: 1) static (at build time): 2) dynamic (at request time)

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // we make the data dynamic by not caching it, we want to fetch the data every time
    // next: { revalidate: 10 }, // by default fetch is static data or unchanging data
  });
  const users: User[] = await res.json(); // we do not need state management here because this is rending on the server side

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersPage;
