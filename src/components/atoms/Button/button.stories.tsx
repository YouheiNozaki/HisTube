import { Meta } from '@storybook/react/types-6-0';

import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary: React.FC = () => (
  <Button text="Click!!" />
);
