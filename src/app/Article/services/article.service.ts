import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article, ArticleList, Articles } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private firestore: AngularFirestore) {}

  getArticleList() {
    return this.firestore.collection('ArticleList').snapshotChanges();
  }

  getArticleListById(id: string) {
    return this.firestore.collection('ArticleList').doc(id).snapshotChanges();
  }

  createArticleList(articleList: ArticleList) {
    return this.firestore.collection('ArticleList').add(articleList);
  }

  updateArticleList(articleList: ArticleList) {
    this.firestore
      .collection('ArticleList')
      .doc(articleList.id)
      .update(articleList);
  }

  deleteArticleList(id: string) {
    this.firestore.collection('ArticleList').doc(id).delete();
  }

  //////////////

  getArticles() {
    return this.firestore.collection('Articles').snapshotChanges();
  }

  getArticlesById(id: string) {
    return this.firestore.collection('Articles').doc(id).snapshotChanges();
  }

  createArticles(articles: Articles) {
    return this.firestore.collection('Articles').add(articles);
  }

  updateArticles(articles: Articles) {
    this.firestore.collection('Articles').doc(articles.id).update(Articles);
  }

  deleteArticles(id: string) {
    this.firestore.collection('Articles').doc(id).delete();
  }

  ////////////////////

  getArticle() {
    return this.firestore.collection('Article').snapshotChanges();
  }

  getArticleById(id: string) {
    return this.firestore.collection('Article').doc(id).snapshotChanges();
  }

  createArticle(article: Article) {
    return this.firestore.collection('Article').add(article);
  }

  updateArticle(article: Article) {
    this.firestore.collection('Article').doc(article.id).update(Article);
  }

  deleteArticle(id: string) {
    this.firestore.collection('Article').doc(id).delete();
  }
}
