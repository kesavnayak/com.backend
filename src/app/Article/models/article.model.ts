export class Article {
  id: string;
  Id: string;
  Title: string;
  Subtitle: string;
  Image: string;
  Publish: any;
  Reference: object[];
  Feature: string;
}

export class Articles {
  id: string;
  Id: string;
  Title: string;
  Subtitle: string;
  More: string = 'article';
  Image: string;
  Publish: any;
  Reference: object[];
  Feature: object[];
}

export class ArticleList {
  id: string;
  ArticleListColor: string;
  ArticleListDesc: string;
  ArticleListLogo: string;
  ArticleListName: string;
}
