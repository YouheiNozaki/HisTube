/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Meta, Story } from '@storybook/react/types-6-0';
import { Card } from './index';
import type { PostType } from '../../../types/post';

export default {
  title: 'components/atoms/Card',
  component: Card,
} as Meta;

const Template: Story<PostType> = (args) => (
  <Card {...args} />
);
export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: '中国史① 中国王朝を覚えよう',
  tag: [
    { id: 1, name: '世界史' },
    { id: 2, name: '中国' },
  ],
  createdAt: '2020-11-01T13:16:26.152Z',
  updatedAt: '2020-11-01T13:16:26.152Z',
  url: './mock.png',
};
