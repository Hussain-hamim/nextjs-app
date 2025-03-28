import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'no-store', // we make the data dynamic by not caching it, we want to fetch the data every time
    next: { revalidate: 200 }, // by default fetch is static data or unchanging data
  });
  const users: User[] = await res.json(); // we do not need state management here because this is rending on the server side

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href='/users?sortOrder=name'>Name</Link>
            </th>
            <th>
              <Link href='/users?sortOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
