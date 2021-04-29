import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.scss'],
})
export class ArticlesEditComponent implements OnInit {
  formData: FormGroup;
  articles: Articles;
  id: string;
  fea = [];
  ref = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    if (!!this.id) {
      this.articleService.getArticlesById(this.id).subscribe((data) => {
        this.articles = {
          id: data.payload.id,
          ...(data.payload.data() as {}),
        } as Articles;

        if (this.articles) {
          this.formData.patchValue(this.articles);
        }

        for (let i = 0; i < this.articles.Feature.length; i++) {
          this.fea.push({ name: this.articles.Feature[i] });
        }

        for (let i = 0; i < this.articles.Reference.length; i++) {
          this.ref.push({ name: this.articles.Reference[i] });
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
      Feature: new FormControl(''),
    });
  }

  update(articles) {
    this.articles.Title = articles.value.Title;
    this.articles.Subtitle = articles.value.Subtitle;
    this.articles.Image = articles.value.Image;
    this.articles.Reference = articles.value.Reference;
    this.articles.Feature = articles.value.Feature;
    this.articles.Id = this.id;
    this.articles.More = 'article';
    this.articles.Publish = Date.parse(new Date().toString());

    if (this.formData.valid) {
      this.articleService.updateArticles(this.articles);
    }
  }

  submit(articles) {
    debugger;
    this.articles.Title = articles.value.Title;
    this.articles.Subtitle = articles.value.Subtitle;
    this.articles.Image = articles.value.Image;
    this.articles.Reference = articles.value.Reference;
    this.articles.Feature = articles.value.Feature;
    this.articles.Id = this.id;
    this.articles.More = 'article';
    this.articles.Publish = Date.parse(new Date().toString());

    if (this.formData.valid) {
      this.articleService.createArticles(this.articles);
    }
  }

  cancel() {
    this.formData.reset();
  }

  displayFeature(count) {
    let dataArray = [];
    for (let i = 0; i < count.length; i++) {
      dataArray.push(count[i].name);
    }
    this.formData.patchValue({ Feature: dataArray });
  }
  displayReference(count) {
    let dataArray = [];
    for (let i = 0; i < count.length; i++) {
      dataArray.push(count[i].name);
    }
    this.formData.patchValue({ Reference: dataArray });
  }
}
