import { Meta } from '@storybook/react/types-6-0';
import { Loading } from '.';

export default {
  title: 'components/atoms/Loading',
  component: Loading,
} as Meta;

export const Primary: React.FC = () => <Loading />;
