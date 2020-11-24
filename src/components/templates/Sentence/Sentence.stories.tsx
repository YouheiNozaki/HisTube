/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Meta, Story } from '@storybook/react/types-6-0';
import { PostType } from 'types/post';
import { Sentence } from '.';

export default {
  title: 'components/templates/Sentence',
  component: Sentence,
} as Meta;

const Template: Story<PostType> = (args) => (
  <Sentence {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      fieldId: 'heading1',
      heading1:
        '中国史の順番を「アルプス一万尺」で覚えよう',
    },
    {
      fieldId: 'video',
      video:
        '<iframe width="480" height="270" src="https://www.youtube.com/embed/MQKZ3azlmUM?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p><br></p>',
    },
    {
      fieldId: 'Sentence',
      sentence:
        '<p>中国王朝第1回目は「<strong>中国王朝を覚える</strong>」です。<br>中国王朝の順番を覚えておくと、中国史の歴史の流れが頭に入ってきて学びやすくなると思うのでぜひ覚えましょう。<br>「アルプス一万尺」の替え歌を何回か繰り返し歌えば覚えられると思います。</p>',
    },
    {
      fieldId: 'heading2',
      heading2: '古代中国〜後漢まで',
    },
    {
      fieldId: 'Sentence',
      sentence:
        '<p>殷　ー　周　ー　東周　ー　春秋戦国　ー　秦　ー　前漢　ー　新　ー　後漢<br><br>古代中国からです。ここでは概要だけ説明します。詳しい解説は各ページを参照してください。<br><br>現在、王朝の存在がはっきりしているのは<strong>殷</strong>王朝から〜です。<a href="https://ja.wikipedia.org/wiki/%E5%A4%8F_(%E4%B8%89%E4%BB%A3)" target="_blank" rel="noopener noreferrer">夏王朝</a>にまつわる資料が発見された場合中国の歴史も変わっていくことになるかもしれません。<br>周は後半になると諸侯の権力が強まってしまったため<strong>東周</strong>と勢力が縮小し、いわゆる<strong>春秋戦国</strong>時代に突入します。<br>この春秋戦国時代を集結させたのは始皇帝で有名な<strong>秦</strong>。しかし、始皇帝の政策はあまりに急進的であったため農民の反乱を契機に「項羽と劉邦」によって秦は滅びます。<br>続く項羽との争いを制した劉邦は、<strong>前漢</strong>を建国します。７代武帝の時代に外征を繰り返し行ったことから経済は混乱、前漢は一時、周の政治を理想とした<strong>新</strong>に滅ぼされてしまいます。<br>漢の復興を果たした劉秀。光武帝の名で倭国（日本）と冊封を結んだことでも有名です。しかし、この<strong>後漢</strong>は間もなく黄巾の乱を経て、三国時代の争乱の中、滅びてしまうことになります。</p>',
    },
    {
      fieldId: 'heading2',
      heading2: '魏晋南北朝時代',
    },
    {
      fieldId: 'Sentence',
      sentence:
        '<p>魏・蜀・呉　ー　西晋<br><br>三国志で有名な<strong>魏・蜀・呉</strong>の三国時代を納めた司馬氏が建国した<strong>西晋</strong>ですが、<strong>遊牧民をなぜか中国国内に招き入れる</strong>などいろいろやらかして南北に分断する混乱の時代に突入してしましました。</p>',
    },
    {
      fieldId: 'heading3',
      heading3: '南朝',
    },
    {
      fieldId: 'Sentence',
      sentence:
        '<p>東晋　ー　宋　ー　斉　ー　梁　ー　陳　ー　隋<br><br>いわゆる南朝です。遊牧民である鮮卑に侵略されてしまった西晋は華南(中国の南方）に逃れて<strong>東晋</strong>を築きました。その後に続く<strong>宋</strong>、<strong>斉</strong>、<strong>梁</strong>、<strong>陳</strong>といった王朝も北朝の影響を受けて、長続きはせず、最終的には北朝からでた<strong>隋</strong>に吸収されていきました。</p>',
    },
    {
      fieldId: 'heading3',
      heading3: '北朝',
    },
    {
      fieldId: 'Sentence',
      sentence:
        '<p>北魏　ー　東魏　ー　北斉<br>　　　ー　西魏　ー　北周　ー　隋<br><br>北朝です。華北に勢力を誇った鮮卑が建国した<strong>北魏</strong>は隋・唐にも引き継がれる政策を起こしていきます。その後、内部の民族の反発もあり<strong>東魏・西魏</strong>と分裂し、それぞれ<strong>北斉・北周</strong>に滅ぼされてしまいますが、最終的に北周から建国された隋によって南北朝は統一され、中国を統一する<strong>隋</strong>王朝が成立しました。</p>',
    },
    {
      fieldId: 'heading2',
      heading2: '中央集権国家〜モンゴル帝国',
    },
    {
      fieldId: 'Sentence',
      sentence:
        '<p>隋　ー　唐　ー　五代十国　ー　宋　ー　金　ー　南宋　ー　元　ー　明　ー　清<br><br>中央集権国家体制は<strong>隋・唐</strong>王朝にて築かれていきます。特に唐は律令体制と呼ばれる日本の法体制にも大きな影響を与えた国家体制を300年をも築きました。<br>しかし、唐の支配が揺らぐと周辺国の民族意識が高まり、国内も不安定な時代が続いてしまいました。この混乱の時代を<strong>五代十国</strong>時代といいます。<br><strong>宋</strong>はこの混乱を治めましたが、すでに周辺国の民族意識はとても高まっており中国王朝が統一を維持することは困難になってしまいました。宋はその中、女真族が建国した<strong>金</strong>に都を陥落されてしまいます。<br>その後、両国は同盟を結び、華北・華中を金、華南を<strong>南宋</strong>が支配する体制が続いていきました。<br>これらの王朝はモンゴル系の民族出のチンギス＝ハンが建国した<strong>元</strong>によって滅ぼされてしまうことになります。<br>TODO：続きを書く。</p>',
    },
  ],
};
