import { Meta } from '@storybook/react/types-6-0';
import { EffectLink } from './index';

export default {
  title: 'components/atoms/EffectLink',
  component: EffectLink,
} as Meta;

export const Default: React.FC = () => (
  <EffectLink text="その他" url="./post" />
);
