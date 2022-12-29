export interface tag {
  sys: sys;
  tagName: string;
}
export interface category {
  categoryName: string;
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
      category: category;
      tag: tag;
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
