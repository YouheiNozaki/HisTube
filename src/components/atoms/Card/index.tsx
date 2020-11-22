import { Fragment } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import { renderAst } from 'lib/renderHtml';
import type { PostType } from 'types/post';

export const Card: React.FC<PostType> = ({
  id,
  title,
  createdAt,
  updatedAt,
  tag,
  video,
}) => {
  return (
    <Fragment key={id}>
      <section>
        <Link href={id}>
          <a href={id}>
            <h2>{title}</h2>
            {tag.map((t) => {
              return (
                <Fragment key={t.id}>
                  <p>{t.name}</p>
                </Fragment>
              );
            })}
            <p>{dayjs(createdAt).format('YYYY/MM/DD')}</p>
            <p>{dayjs(updatedAt).format('YYYY/MM/DD')}</p>
            <div>{renderAst(video)}</div>
          </a>
        </Link>
      </section>
    </Fragment>
  );
};
