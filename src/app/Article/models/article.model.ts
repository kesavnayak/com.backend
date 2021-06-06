import * as firebase from 'firebase';
import * as moment from 'moment';
export class Article {
  Id: string;
  Title: string;
  Subtitle: string;
  Image: string;
  Publish: any = moment(
    firebase.default.database.ServerValue.TIMESTAMP
  ).toDate();
  Reference: object[];
  Feature: string;
}

export class Articles {
  Id: string;
  Title: string;
  Subtitle: string;
  More: string = 'article';
  Image: string;
  Publish: any = moment(
    firebase.default.database.ServerValue.TIMESTAMP
  ).toDate();
  Reference: object[];
  Feature: object[];
  Description: string;
}

export class ArticleList {
  ArticleListColor: string;
  ArticleListDesc: string;
  ArticleListLogo: string;
  ArticleListName: string;
}
