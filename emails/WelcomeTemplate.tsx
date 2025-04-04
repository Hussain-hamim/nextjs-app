import {
  Body,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import React from 'react';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome here!</Preview>
      <Tailwind>
        <Body className='bg-blue-300'>
          <Text>Hello {name}</Text>
          <Link href='x.com/erencodes'>follow on our X</Link>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
