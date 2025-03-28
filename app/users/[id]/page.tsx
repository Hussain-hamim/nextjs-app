import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound(); // navigate to not-found page if user id is over 10

  return (
    <>
      <div>UserDetailPage</div>
      <div>id: {id}</div>
    </>
  );
};

export default UserDetailPage;
