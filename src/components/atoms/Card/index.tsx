import { Fragment } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import styled from 'styled-components';

import type { PostType } from 'types/post';

interface Props extends PostType {
  className?: string;
  url?: string;
}

const Component: React.FC<Props> = ({
  id,
  title,
  createdAt,
  updatedAt,
  tag,
  url,
  className,
}) => {
  return (
    <section className={className}>
      <Fragment key={id}>
        <Link href={id}>
          <a href={id} className="card">
            <div className="card-image">
              <img src={url} alt={title} />
            </div>
            <div className="card-content">
              <h2 className="card-heading">{title}</h2>
              <div className="card-tags">
                {tag.map((t) => {
                  return (
                    <Fragment key={t.id}>
                      <p>{t.name}</p>
                    </Fragment>
                  );
                })}
              </div>
              <div className="card-day">
                <p>
                  作成日:
                  {dayjs(createdAt).format('YYYY/MM/DD')}
                </p>
                <p>
                  更新日:
                  {dayjs(updatedAt).format('YYYY/MM/DD')}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </Fragment>
    </section>
  );
};

const StyledComponent = styled(Component)`
  margin: 12px;
  padding: 12px;
  & .card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    @media (min-width: 560px) {
      display: flex;
      flex-direction: row;
    }
  }
  & .card-image {
    overflow: hidden;
    @media (min-width: 560px) {
      max-width: 60%;
      margin: 0 16px;
    }
  }
  & .card-image > img {
    transition: 0.5s all;
  }
  & .card-image > img:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
  & .card-content {
    @media (min-width: 560px) {
      max-width: 35%;
    }
  }
  & .card-heading {
    color: ${(props) => props.theme.colors.purple[900]};
    @media (min-width: 560px) {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  & .card-tags {
    display: flex;
  }
  & .card-tags > p {
    color: ${(props) => props.theme.colors.purple[600]};
    font-weight: ${(props) =>
      props.theme.fontWeights.hairline};
    margin-left: 8px;
    padding: 8px;
    border-radius: 8px;
    border: solid 1px
      ${(props) => props.theme.colors.purple[600]};
  }
  & .card-day {
    display: flex;
  }
  & .card-day > p {
    margin-right: 8px;
    color: ${(props) => props.theme.colors.purple[400]};
  }
`;

export const Card = StyledComponent;
