import { Meta } from '@storybook/react/types-6-0';
import { ThirdHeading } from '.';

export default {
  title: 'components/atoms/ThirdHeading',
  component: ThirdHeading,
} as Meta;

export const Primary: React.FC = () => (
  <ThirdHeading text="古代中国〜後漢まで" />
);
