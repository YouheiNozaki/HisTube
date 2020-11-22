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
  title:
    'ダレイオス三世 アレクサンドロス大王に負けたペルシア最後の王の人生が壮絶すぎた…',
  tag: [
    { id: 1, name: '世界史' },
    { id: 2, name: '中国' },
  ],
  createdAt: '2020-11-01T13:16:26.152Z',
  updatedAt: '2020-11-01T13:16:26.152Z',
  video:
    '<iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PLvp1srAQnHK3tFH37_3Xr7168Ill09cOO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p><br></p>',
};
