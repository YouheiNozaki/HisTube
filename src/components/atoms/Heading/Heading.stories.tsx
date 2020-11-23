import { Meta } from '@storybook/react/types-6-0';
import { Heading } from '.';

export default {
  title: 'components/atoms/Heading',
  component: Heading,
} as Meta;

export const Primary: React.FC = () => (
  <Heading text="動画一覧ページ" />
);
