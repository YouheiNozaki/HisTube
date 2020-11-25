export type TermType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
};

export type TermsType = {
  body: TermType[];
};
