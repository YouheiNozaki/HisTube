/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import type { ContentType } from 'types/post';

import { Heading } from 'components/atoms/Heading';
import { SecondHeading } from 'components/atoms/SecondHeading';
import { ThirdHeading } from 'components/atoms/ThirdHeading';
import { renderAst } from 'lib/renderHtml';

type Props = {
  className?: string;
  content?: ContentType[];
};

const Component: React.FC<Props> = ({
  className,
  content,
}): JSX.Element => (
  <main className={className}>
    {content.map((c) =>
      c.fieldId === 'heading1' ? (
        <Heading key={c.fieldId} text={c.heading1} />
      ) : c.fieldId === 'heading2' ? (
        <SecondHeading key={c.fieldId} text={c.heading2} />
      ) : c.fieldId === 'heading3' ? (
        <ThirdHeading key={c.fieldId} text={c.heading3} />
      ) : c.fieldId === 'Sentence' ? (
        <div>{renderAst(c.sentence)}</div>
      ) : c.fieldId === 'video' ? (
        <div className="iframe-wrap">
          <div>{renderAst(c.video)}</div>
        </div>
      ) : null,
    )}
  </main>
);

const StyledComponent = styled(Component)`
  & .iframe-wrap {
    position: relative;
  }
  & .iframe-wrap::before {
    content: '';
    display: inline-block;
    padding-top: 56.25%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 4px;
    @media (min-width: 560px) {
      padding: 24px;
    }
  }
`;

export const Sentence: React.FC<Props> = (props) => {
  const { children, content } = props;

  return (
    <StyledComponent content={content}>
      {children}
    </StyledComponent>
  );
};
