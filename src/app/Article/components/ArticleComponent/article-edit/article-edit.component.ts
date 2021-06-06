import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/Article/models/article.model';
import { ArticleService } from 'src/app/Article/services/article.service';

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
      //this.articleService.getArticle().subscribe((x) => {
      //x.map((e) => {
      debugger;
      //if ((e.payload.doc.data() as Article).Id == this.id) {
      this.articleService.getArticleById(this.id).subscribe((data) => {
        const id = data.payload.id;
        const d = data.payload.data() as Article;

        this.article = { id, ...d } as Article;

        if (this.article) {
          this.formData.patchValue(this.article);
        }

        for (let i = 0; i < this.article.Reference.length; i++) {
          this.ref.push({ name: this.article.Reference[i] });
        }
      });
      //}
      //});
      //});
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
    var newArticle = new Article();

    newArticle.Title = article.value.Title;
    newArticle.Subtitle = article.value.Subtitle;
    newArticle.Image = article.value.Image;
    newArticle.Reference = article.value.Reference;
    newArticle.Feature = article.value.Feature;
    newArticle.Id = this.article.Id;

    if (this.formData.valid) {
      this.articleService.updateArticle(newArticle, this.article['id']);
    }
  }

  submit(article) {
    debugger;
    var newArticle = new Article();
    newArticle.Title = article.value.Title;
    newArticle.Subtitle = article.value.Subtitle;
    newArticle.Image = article.value.Image;
    newArticle.Reference = article.value.Reference;
    newArticle.Feature = article.value.Feature;
    newArticle.Id = this.id;

    if (this.formData.valid) {
      this.articleService.createArticle(newArticle);
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
