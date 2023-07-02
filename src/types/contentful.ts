export interface tag {
  sys: sys;
  fields: {
    tagName: string;
  };
  tagName: string;
}
export interface category {
  sys: sys;
  fields: {
    categoryName: string;
  };
  categoryName: string;
  sys: sys;
}

export interface thumbnail {
  fields: {
    title: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
}

export interface Article {
  fields: {
    title: string;
    articleBody: {
      content: ArticleContent[];
    };
    category: category;
    tags: tag[];
    publishedDate: string;
  };
}

export interface ArticleContent {
  content: ArticleContent[];
  value: string;
  nodeType: string;
}

export interface ArticleModel {
  includes: {
    Asset: {}[];
    Entry: {
      sys: sys;
      fields: tag | category;
    }[];
  };
  items: {
    fields: {
      title: string;
      articleBody: {
        content: {
          nodeType: string;
          content: {
            nodeType: string;
            value: string;
          }[];
        }[];
      };
      publishedDate: string;
      category: category;
      tags: tag[];
    };
    sys: sys;
  }[];
  limit: number;
  skip: number;
  total: number;
  sys: sys;
}

export interface sys {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export function isCateogry(item: tag | category): item is category {
  return (item as category).categoryName !== undefined;
}

export function isTag(item: tag | category): item is tag {
  return (item as tag).tagName !== undefined;
}
