import React from 'react';
import unified from 'unified';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';

import { Paragraph } from './paragraph';
import { Strong } from './strong';

export function renderAst(
  content: string,
): React.ReactNode {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .use(parse)
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      components: {
        p: Paragraph,
        strong: Strong,
      },
    })
    .processSync(content).result;

  return htmlAst;
}
