import { Meta } from '@storybook/react/types-6-0';
import { Nav } from '.';

export default {
  title: 'components/templates/Nav',
  component: Nav,
} as Meta;

export const Normal: React.FC = () => <Nav />;
