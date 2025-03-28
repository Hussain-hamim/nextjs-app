import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'no-store', // we make the data dynamic by not caching it, we want to fetch the data every time
    next: { revalidate: 200 }, // by default fetch is static data or unchanging data
  });
  const users: User[] = await res.json(); // we do not need state management here because this is rending on the server side

  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
