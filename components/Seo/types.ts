export type MetaData = {
  metaTitle?: string;
  shareImage?: string;
  metaDescription?: string;
  article?: boolean;
  url?: string;
};

export type SeoProps = {
  seo?: MetaData;
};
