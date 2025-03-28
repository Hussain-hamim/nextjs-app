import React from 'react';

interface Props {
  params: { slug: string[] };
}

// the getting all segments making optional option don't work in turbopack mode so edit the script in package.json
//In Next.js, you can make dynamic route segments optional using [[...slug]], which is called an optional catch-all route. Here’s how it works:

const ProductSlug = ({ params: { slug } }: Props) => {
  return (
    <>
      <div>Product slug</div>
      <div>slug params: {slug}</div>
    </>
  );
};

export default ProductSlug;
