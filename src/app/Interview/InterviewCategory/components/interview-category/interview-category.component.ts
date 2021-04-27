import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionCategory } from 'src/app/QuestionCategory/models/question-category.model';
import { InterviewCategory } from '../../models/interview-category.model';
import { QuestionCategoryService } from 'src/app/QuestionCategory/services/question-category.service';
import { InterviewCategoryService } from '../../services/interview-category.service';

@Component({
  selector: 'app-interview-category',
  templateUrl: './interview-category.component.html',
  styleUrls: ['./interview-category.component.scss'],
})
export class InterviewCategoryComponent implements OnInit {
  questionCategory: QuestionCategory;
  interviewCategories: InterviewCategory[];
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionCategoryService: QuestionCategoryService,
    private interviewCategoryService: InterviewCategoryService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (!!this.id) {
      this.questionCategoryService
        .getQuestionCategoryById(this.id)
        .subscribe((data) => {
          this.questionCategory = {
            ...(data.payload.data() as {}),
          } as QuestionCategory;

          this.interviewCategoryService
            .getQuestionCategory(this.questionCategory.Table)
            .subscribe((data) => {
              this.interviewCategories = data.map((e) => {
                return {
                  id: e.payload.doc.id,
                  ...(e.payload.doc.data() as {}),
                } as InterviewCategory;
              });

              this.interviewCategories = this.interviewCategories.sort(
                (item1, item2) =>
                  Number(item1.QuestionNo) < Number(item2.QuestionNo) ? 1 : -1
              );
            });
        });
    }
  }

  update(id: string) {
    this.router.navigate(['/UpdateInterview/' + this.id + '/' + id]);
  }

  delete(id: string) {
    debugger;
    this.interviewCategoryService.deleteInterviewCategory(
      this.questionCategory.Table,
      id
    );
  }
}
