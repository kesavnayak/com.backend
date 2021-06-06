import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/Article/models/article.model';
import { ArticleService } from 'src/app/Article/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article[];
  id: string;

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.articleService.getArticle().subscribe((data) => {
      this.article = data.map((e) => {
        const id = e.payload.doc.id;
        const data = e.payload.doc.data() as Article;
        return { id, ...data } as Article;
      });

      this.article = this.article.filter((e) => {
        return e.Id == this.id;
      });
      console.log(this.article);
    });
  }

  create() {
    this.router.navigate(['/ArticleCreate']);
  }

  update(id: string) {
    this.router.navigate(['/ArticleUpdate/' + id]);
  }

  delete(id: string) {
    this.articleService.deleteArticle(id);
  }
}
