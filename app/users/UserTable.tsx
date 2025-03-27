import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // we make the data dynamic by not caching it, we want to fetch the data every time
    // next: { revalidate: 10 }, // by default fetch is static data or unchanging data
  });
  const users: User[] = await res.json(); // we do not need state management here because this is rending on the server side

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
        {/* <h1>hello</h1> */}
      </ul>
    </>
  );
};

export default UserTable;
