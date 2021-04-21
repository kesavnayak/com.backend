import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCategoryEditComponent } from './QuestionCategory/components/question-category-edit/question-category-edit.component';
import { QuestionCategoryComponent } from './QuestionCategory/components/question-category/question-category.component';
import { InterviewCategoryComponent } from './Interview/InterviewCategory/components/interview-category/interview-category.component';
import { InterviewCategoryEditComponent } from './Interview/InterviewCategory/components/interview-category-edit/interview-category-edit.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
