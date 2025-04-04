import { prisma } from '@/prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
  //   adapter: PrismaAdapter(prisma), // if this is not used, the session will not be stored in the prisma database only use if prisma db is running
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;
        console.log('hashed: ', await bcrypt.hash(credentials.password, 10));

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const passwordMatched = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        );

        return passwordMatched ? user : null;

        // const customUser = {
        //   id: 2,
        //   name: credentials.email,
        //   email: credentials.email,
        //   email_verified: Date.now(),
        //   image: 'https://www.w3schools.com/howto/img_avatar.png',
        //   hashedPassword: credentials.password,
        // };

        // return customUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
