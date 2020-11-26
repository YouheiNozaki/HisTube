import styled from 'styled-components';

import { Layout } from 'components/templates/layout';
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
        <Heading text="プライバシーポリシー" />
        <p>
          HisTube（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
        </p>
        <section>
          <SecondHeading text="第1条（個人情報）" />
          <p>
            「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </p>
        </section>
        <section>
          <SecondHeading text="第2条（個人情報の収集方法）" />

          <p>
            ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          </p>
          <p>
            当社は，ユーザーが利用登録をする際に,ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
          </p>
        </section>
        <section>
          <SecondHeading text="第3条（個人情報を収集・利用する目的）" />
          <p>
            当社が個人情報を収集・利用する目的は，以下のとおりです。
          </p>
          <ul>
            <li>当社サービスの提供・運営のため</li>
            <li>
              ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
            </li>
            <li>
              ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため
            </li>
            <li>
              メンテナンス，重要なお知らせなど必要に応じたご連絡のため
            </li>
            <li>
              利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
            </li>
            <li>
              ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため
            </li>
            <li>上記の利用目的に付随する目的</li>
          </ul>
        </section>
        <section>
          <SecondHeading text="第4条（利用目的の変更）" />
          <ul>
            <li>
              当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。
            </li>
            <li>
              利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
            </li>
          </ul>
        </section>

        <section>
          <SecondHeading text="第5条（個人情報の訂正および削除）" />
          <ul>
            <li>
              ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。
            </li>
            <li>
              当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。
            </li>
            <li>
              当社は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，これをユーザーに通知します。
            </li>
          </ul>
        </section>
        <section>
          <SecondHeading text="第6条（個人情報の利用停止等）" />
          <ul>
            <li>
              当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。
            </li>
            <li>
              当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。
            </li>
            <li>
              当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。
            </li>
            <li>
              前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。
            </li>
          </ul>
        </section>
        <section>
          <SecondHeading text="第7条（プライバシーポリシーの変更）" />
          <ul>
            <li>
              本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
            </li>
            <li>
              当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
            </li>
          </ul>
        </section>
        <section className="privacy-update-link">
          <SecondHeading text="プライバシー更新履歴" />
          <ul>
            <li>2020/11/24制定</li>
          </ul>
          <p className="privacy-ijou">以上</p>
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
  padding: 16px;
  ul > li {
    list-style: none;
    line-height: 1.7;
    letter-spacing: 0.05em;
    padding: 16px;
  }
  p {
    padding: 16px;
    line-height: 1.7;
    letter-spacing: 0.05em;
  }
  & .privacy-update-link {
    display: flex;
    flex-direction: column;
  }
  & .privacy-update-link > a {
    margin: 0 auto;
  }
  & .privacy-ijou {
    margin-top: 20px;
  }
`;

const Terms: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledComponent>{children}</StyledComponent>;
};

export default Terms;
