import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Articles[];
  id: string;

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe((data) => {
      this.articles = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Articles;
      });

      this.articles = this.articles.filter((e) => {
        return e.Id == this.id;
      });
      console.log(this.articles);
    });
  }

  create() {
    this.router.navigate(['/ArticlesCreate']);
  }

  update(id: string) {
    this.router.navigate(['/ArticlesUpdate/' + id]);
  }

  delete(id: string) {
    this.articleService.deleteArticles(id);
  }
  details(id: string) {
    this.router.navigate(['/ArticlesDetails/' + id]);
  }
}
