import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleList } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list-edit',
  templateUrl: './article-list-edit.component.html',
  styleUrls: ['./article-list-edit.component.scss'],
})
export class ArticleListEditComponent implements OnInit {
  formData: FormGroup;
  articleList: ArticleList;
  id: string;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    if (!!this.id) {
      this.articleService.getArticleListById(this.id).subscribe((data) => {
        this.articleList = {
          id: data.payload.id,
          ...(data.payload.data() as {}),
        } as ArticleList;

        if (this.articleList) {
          this.formData.patchValue(this.articleList);
        }
      });
    }
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      ArticleListColor: new FormControl('', Validators.required),
      ArticleListDesc: new FormControl('', Validators.required),
      ArticleListLogo: new FormControl('', Validators.required),
      ArticleListName: new FormControl('', Validators.required),
    });
  }

  update(articleList) {
    this.articleList.ArticleListColor = articleList.value.ArticleListColor;
    this.articleList.ArticleListDesc = articleList.value.ArticleListDesc;
    this.articleList.ArticleListLogo = articleList.value.ArticleListLogo;
    this.articleList.ArticleListName = articleList.value.ArticleListName;

    if (this.formData.valid) {
      this.articleService.updateArticleList(this.articleList);
    }
  }

  submit(articleList) {
    if (this.formData.valid) {
      this.articleService.createArticleList(articleList.value);
    }
  }

  cancel() {
    this.formData.reset();
  }
}
