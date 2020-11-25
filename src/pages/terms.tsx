import styled from 'styled-components';

import { Layout } from 'components/layout';
import {
  Heading,
  SecondHeading,
  Button,
} from 'components/atoms';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Component: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <main className={className}>
        <Heading text="利用規約" />
        <p>
          この利用規約（以下，「本規約」といいます。）は，HisTube（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </p>
        <section>
          <SecondHeading text="第1条（適用）" />
          <p>
            本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
            本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
          </p>
        </section>
        <section>
          <SecondHeading text="第2条（禁止事項）" />

          <p>
            ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          </p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>
              本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
            </li>
            <li>
              当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
            </li>
            <li>
              本サービスによって得られた情報を商業的に利用する行為
            </li>
            <li>
              当社のサービスの運営を妨害するおそれのある行為
            </li>
            <li>
              不正アクセスをし，またはこれを試みる行為
            </li>
            <li>
              他のユーザーに関する個人情報等を収集または蓄積する行為
            </li>
            <li>
              不正な目的を持って本サービスを利用する行為
            </li>
            <li>
              本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
            </li>
            <li>他のユーザーに成りすます行為</li>
            <li>
              当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
            </li>
            <li>
              面識のない異性との出会いを目的とした行為
            </li>
            <li>
              当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
            </li>
            <li>その他，当社が不適切と判断する行為</li>
          </ul>
        </section>
        <section>
          <SecondHeading text="第3条（本サービスの提供の停止等）" />
          <p>
            当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ul>
            <li>
              本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
            </li>
            <li>
              コンピュータまたは通信回線等が事故により停止した場合
            </li>
            <li>
              その他，当社が本サービスの提供が困難と判断した場合
            </li>
            <li>
              当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
            </li>
          </ul>
        </section>
        <section>
          <SecondHeading text="第4条（利用制限）" />
          <p>
            当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限できるものとします。
          </p>
          <ul>
            <li>
              当社が本サービスの利用を適当でないと判断した場合
            </li>
            <li>本規約のいずれかの条項に反した場合</li>
            <p>
              当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
            </p>
          </ul>
        </section>
        <section>
          <SecondHeading text="第5条（保証の否認および免責事項）" />
          <ul>
            <li>
              当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </li>
            <li>
              当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
            </li>
            <li>
              当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
            </li>
          </ul>
        </section>
        <section>
          <SecondHeading text="第6条（サービス内容の変更等）" />
          <p>
            当社は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </section>
        <section>
          <SecondHeading text="第7条（利用規約の変更）" />
          <p>
            当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
          </p>
        </section>
        <section>
          <SecondHeading text="第8条（個人情報の取扱い）" />
          <p>
            当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。
          </p>
        </section>
        <section>
          <SecondHeading text="第9条（通知または連絡）" />
          <p>
            ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
          </p>
        </section>
        <section>
          <SecondHeading text="第10条（権利義務の譲渡の禁止）" />
          <p>
            ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
          </p>
        </section>
        <section>
          <SecondHeading text="第11条（準拠法・裁判管轄）" />
          <p>
            本規約の解釈にあたっては，日本法を準拠法とします。
            本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>
        <section className="terms-update-link">
          <SecondHeading text="利用規約更新履歴" />
          <ul>
            <li>2020/11/24制定</li>
          </ul>
          <p className="terms-ijou">以上</p>
          <Link href="/">
            <a href="/" className="terms-link">
              <Button text="トップページへ" />
            </a>
          </Link>
        </section>
      </main>
    </Layout>
  );
};

const StyledComponent = styled(Component)`
  margin: 16px;
  ul > li {
    list-style: none;
    line-height: 1.7;
    letter-spacing: 0.05em;
  }
  p {
    line-height: 1.7;
    letter-spacing: 0.05em;
  }
  & .terms-update-link {
    display: flex;
    flex-direction: column;
  }
  & .terms-update-link > a {
    margin: 0 auto;
  }
  & .terms-ijou {
    margin-top: 20px;
  }
`;

const Terms: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};

export default Terms;
