import React from 'react';
import UserTable from './UserTable';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <UserTable sortOder={sortOrder} />
    </div>
  );
};
export default UsersPage;

//

//
////// NOTE:
// run in production: npm start
// run in development: npm run dev

// Rendering: 1) client-side: browser, 2) server-side: server => faster load time => two types of rendering
// server-side: 1) static (at build time): 2) dynamic (at request time)
