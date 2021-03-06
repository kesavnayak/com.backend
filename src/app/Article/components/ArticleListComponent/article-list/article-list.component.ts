import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleList } from 'src/app/Article/models/article.model';
import { ArticleService } from 'src/app/Article/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articleLists: ArticleList[];
  id: string;

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticleList().subscribe((data) => {
      this.articleLists = data.map((e) => {
        const id = e.payload.doc.id;
        const data = e.payload.doc.data() as ArticleList;
        return { id, ...data } as ArticleList;
      });
    });
  }

  create() {
    this.router.navigate(['/ArticleListCreate']);
  }

  update(id: string) {
    this.router.navigate(['/ArticleListUpdate/' + id]);
  }

  delete(id: string) {
    this.articleService.deleteArticleList(id);
  }
  details(id: string) {
    this.router.navigate(['/ArticleListDetails/' + id]);
  }
}
