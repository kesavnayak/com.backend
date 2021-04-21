import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { QuestionCategoryComponent } from './QuestionCategory/components/question-category/question-category.component';
import { QuestionCategoryEditComponent } from './QuestionCategory/components/question-category-edit/question-category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterviewCategoryComponent } from './Interview/InterviewCategory/components/interview-category/interview-category.component';
import { InterviewCategoryEditComponent } from './Interview/InterviewCategory/components/interview-category-edit/interview-category-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionCategoryComponent,
    QuestionCategoryEditComponent,
    InterviewCategoryComponent,
    InterviewCategoryEditComponent,
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
