/* eslint-disable */
import { createElement, Fragment } from 'react';
import rehypeReact from 'rehype-react';
import { IfFlame } from './parts';

// @ts-ignore
export const renderAst = new rehypeReact({
  createElement: createElement,
  Fragment: Fragment,
  components: {
    iframe: IfFlame,
  },
}).Compiler;
