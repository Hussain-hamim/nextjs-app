// import { NextRequest, NextResponse } from 'next/server';

// import middleware from 'next-auth/middleware';
export { default } from 'next-auth/middleware'; // this redirect to login page

//// this is custom and redirect to new-page if you r not login
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/auth/register', request.url));
// }

export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or more
  matcher: ['/admin'], // protected routes
};
