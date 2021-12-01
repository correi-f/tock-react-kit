import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image', module).add('Default', () => (
  <Image
    title="Card title"
    imageUrl="https://avatars0.githubusercontent.com/u/48585267?s=200&v=4"
  />
));
