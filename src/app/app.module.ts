import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { QuestionCategoryComponent } from './Interview/QuestionCategory/components/question-category/question-category.component';
import { QuestionCategoryEditComponent } from './Interview/QuestionCategory/components/question-category-edit/question-category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterviewCategoryComponent } from './Interview/InterviewCategory/components/interview-category/interview-category.component';
import { InterviewCategoryEditComponent } from './Interview/InterviewCategory/components/interview-category-edit/interview-category-edit.component';
import { ArticleListComponent } from './Article/components/article-list/article-list.component';
import { ArticleListEditComponent } from './Article/components/article-list-edit/article-list-edit.component';
import { ArticlesComponent } from './Article/components/articles/articles.component';
import { ArticlesEditComponent } from './Article/components/articles-edit/articles-edit.component';
import { ArticleEditComponent } from './Article/components/article-edit/article-edit.component';
import { DynamicFeatureComponent } from './Article/components/dynamic-feature/dynamic-feature.component';
import { DynamicReferenceComponent } from './Article/components/dynamic-reference/dynamic-reference.component';
import { ArticleComponent } from './Article/components/article/article.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionCategoryComponent,
    QuestionCategoryEditComponent,
    InterviewCategoryComponent,
    InterviewCategoryEditComponent,
    ArticleListComponent,
    ArticleListEditComponent,
    ArticlesComponent,
    ArticlesEditComponent,
    ArticleEditComponent,
    DynamicFeatureComponent,
    DynamicReferenceComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
