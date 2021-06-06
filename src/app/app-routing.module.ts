import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCategoryEditComponent } from './Interview/QuestionCategory/components/question-category-edit/question-category-edit.component';
import { QuestionCategoryComponent } from './Interview/QuestionCategory/components/question-category/question-category.component';
import { InterviewCategoryComponent } from './Interview/InterviewCategory/components/interview-category/interview-category.component';
import { InterviewCategoryEditComponent } from './Interview/InterviewCategory/components/interview-category-edit/interview-category-edit.component';
import { ArticleListComponent } from './Article/components/ArticleListComponent/article-list/article-list.component';
import { ArticlesComponent } from './Article/components/ArticlesComponent/articles/articles.component';
import { ArticleComponent } from './Article/components/ArticleComponent/article/article.component';
import { ArticleListEditComponent } from './Article/components/ArticleListComponent/article-list-edit/article-list-edit.component';
import { ArticlesEditComponent } from './Article/components/ArticlesComponent/articles-edit/articles-edit.component';
import { ArticleEditComponent } from './Article/components/ArticleComponent/article-edit/article-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'List', pathMatch: 'full' },
  { path: 'List', component: QuestionCategoryComponent },
  { path: 'Create', component: QuestionCategoryEditComponent },
  {
    path: 'CreateInterview/:id',
    component: InterviewCategoryEditComponent,
  },
  {
    path: 'Update/:id',
    component: QuestionCategoryEditComponent,
  },
  {
    path: 'UpdateInterview/:id/:iid',
    component: InterviewCategoryEditComponent,
  },
  {
    path: 'Details/:id',
    component: InterviewCategoryComponent,
  },
  {
    path: 'article_list',
    component: ArticleListComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'ArticleListCreate',
    component: ArticleListEditComponent,
  },
  {
    path: 'ArticleListUpdate/:id',
    component: ArticleListEditComponent,
  },
  {
    path: 'ArticleListDetails/:id',
    component: ArticlesComponent,
  },
  {
    path: 'ArticlesCreate/:id',
    component: ArticlesEditComponent,
  },
  {
    path: 'ArticlesUpdate/:id',
    component: ArticlesEditComponent,
  },
  {
    path: 'ArticlesDetails/:id',
    component: ArticleComponent,
  },
  {
    path: 'ArticleCreate/:id',
    component: ArticleEditComponent,
  },
  {
    path: 'ArticleUpdate/:id',
    component: ArticleEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
