import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit {
  formData: FormGroup;
  article: Article;
  id: string;
  ref = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    if (!!this.id) {
      this.articleService.getArticleById(this.id).subscribe((data) => {
        this.article = {
          id: data.payload.id,
          ...(data.payload.data() as {}),
        } as Article;

        if (this.article) {
          this.formData.patchValue(this.article);
        }

        for (let i = 0; i < this.article.Reference.length; i++) {
          this.ref.push({ name: this.article.Reference[i] });
        }
      });
    }
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      Title: new FormControl('', Validators.required),
      Subtitle: new FormControl('', Validators.required),
      Image: new FormControl('', Validators.required),
      Reference: new FormControl(''),
      Feature: new FormControl('', Validators.required),
    });
  }

  update(article) {
    this.article.Title = article.value.Title;
    this.article.Subtitle = article.value.Subtitle;
    this.article.Image = article.value.Image;
    this.article.Reference = article.value.Reference;
    this.article.Feature = article.value.Feature;
    this.article.Id = this.id;
    this.article.Publish = Date.parse(new Date().toString());

    if (this.formData.valid) {
      this.articleService.updateArticle(this.article);
    }
  }

  submit(article) {
    debugger;
    this.article.Title = article.value.Title;
    this.article.Subtitle = article.value.Subtitle;
    this.article.Image = article.value.Image;
    this.article.Reference = article.value.Reference;
    this.article.Feature = article.value.Feature;
    this.article.Id = this.id;
    this.article.Publish = Date.parse(new Date().toString());

    if (this.formData.valid) {
      this.articleService.createArticle(this.article);
    }
  }

  cancel() {
    this.formData.reset();
  }

  displayReference(count) {
    let dataArray = [];
    for (let i = 0; i < count.length; i++) {
      dataArray.push(count[i].name);
    }
    this.formData.patchValue({ Reference: dataArray });
  }
}
