import { type BlocksContent } from "@strapi/blocks-react-renderer";
export interface CardProps {
  imgUrl: string;
  buttonText: string;
  description: string;
  title: string;
  handleClick?: () => void;
}

export interface BlogsPreviewProps {
  content: string;
  fetchedAt: string; // ISO string, e.g., "2025-05-24T19:33:37.636Z"
  id: string; // UUID, e.g., "2c72e05a-8b59-4230-8269-4723022a3308"
  link: string; // URL to the article
  pubDate: string; // Publication date as string, e.g., "2019-01-20 07:16:34"
  title: string; // Title of the article
  username: string; // Author's username
  handleClick?: () => void;
}

export interface AIInsightsTrendsProps {
  cardsData: BlogsPreviewProps[];
  handleClick?: () => void;
}

export interface ArticleData {
  content: BlocksContent;
  fetchedAt: string; // ISO string, e.g., "2025-05-24T19:33:37.636Z"
  id: string; // UUID, e.g., "2c72e05a-8b59-4230-8269-4723022a3308"
  link: string; // URL to the article
  pubDate: string; // Publication date as string, e.g., "2019-01-20 07:16:34"
  title: string; // Title of the article
  username: string; // Author's username
  // documentId?: string; // Optional document ID for Strapi
}

export interface BlogBannerProps {
  onShowBlogDetail: () => void;
  blogDetail: boolean;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  blogData: any; // Assuming blogs is an array of blog objects
}
