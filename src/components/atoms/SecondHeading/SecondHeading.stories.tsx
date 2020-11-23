import { Meta } from '@storybook/react/types-6-0';
import { SecondHeading } from '.';

export default {
  title: 'components/atoms/SecondHeading',
  component: SecondHeading,
} as Meta;

export const Primary: React.FC = () => (
  <SecondHeading text="古代中国〜後漢まで" />
);
