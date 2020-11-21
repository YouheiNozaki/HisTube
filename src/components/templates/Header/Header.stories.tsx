// storybookがnext-imageを呼び出せないので表示されない
import { Meta } from '@storybook/react/types-6-0';
import { Header } from '.';

export default {
  title: 'components/templates/Header',
  component: Header,
} as Meta;

export const Normal: React.FC = () => <Header />;
