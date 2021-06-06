import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from 'src/app/Article/models/article.model';
import { ArticleService } from 'src/app/Article/services/article.service';

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
      //this.articleService.getArticles().subscribe((x) => {
      //x.map((e) => {
      //if ((e.payload.doc.data() as Articles).Id == this.id) {
      this.articleService.getArticlesById(this.id).subscribe((data) => {
        const id = data.payload.id;
        const d = data.payload.data() as Articles;

        this.articles = { id, ...d } as Articles;

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
      Feature: new FormControl(''),
      Description: new FormControl('', Validators.required),
    });
  }

  update(articles) {
    debugger;
    var newArticles = new Articles();
    newArticles.Title = articles.value.Title;
    newArticles.Subtitle = articles.value.Subtitle;
    newArticles.Image = articles.value.Image;
    newArticles.Reference = articles.value.Reference;
    newArticles.Feature = articles.value.Feature;
    newArticles.Id = this.articles.Id;
    newArticles.Description = articles.value.Description;

    if (this.formData.valid) {
      this.articleService.updateArticles(newArticles, this.articles['id']);
    }
  }

  submit(articles) {
    var newArticles = new Articles();
    newArticles.Title = articles.value.Title;
    newArticles.Subtitle = articles.value.Subtitle;
    newArticles.Image = articles.value.Image;
    newArticles.Reference = articles.value.Reference;
    newArticles.Feature = articles.value.Feature;
    newArticles.Id = this.id;
    newArticles.Description = articles.value.Description;

    if (this.formData.valid) {
      this.articleService.createArticles(newArticles);
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
