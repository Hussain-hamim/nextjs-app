import { Body, Html, Link, Preview, Text } from '@react-email/components';
import React from 'react';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome here!</Preview>
      <Body>
        <Text>Hello {name}</Text>
        <Link href='x.com/erencodes'>follow on our X</Link>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
