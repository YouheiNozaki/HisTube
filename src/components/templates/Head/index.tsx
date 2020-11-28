import Head from 'next/head';

// import { HeadType } from 'types/head';
export type HeadType = {
  pagetitle?: string;
  pagedescription?: string;
  pagepath?: string;
  keyword: string;
  image: string;
};

export const HeadTemplate: React.FC<HeadType> = ({
  pagetitle,
  pagedescription,
  pagepath,
  keyword,
  image,
}) => {
  const title = pagetitle
    ? `${pagetitle} | ${process.env.NEXT_PUBLIC_TITLE}`
    : `${process.env.NEXT_PUBLIC_TITLE}`;
  const description =
    pagedescription ||
    `${process.env.NEXT_PUBLIC_DESCRIPTION}`;
  const url = pagepath
    ? `${process.env.NEXT_PUBLIC_URL}${pagepath}`
    : `${process.env.NEXT_PUBLIC_URL}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Head>
  );
};
