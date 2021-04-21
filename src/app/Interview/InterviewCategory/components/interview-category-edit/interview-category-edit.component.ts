import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionCategory } from 'src/app/QuestionCategory/models/question-category.model';
import { QuestionCategoryService } from 'src/app/QuestionCategory/services/question-category.service';
import { InterviewCategory } from '../../models/interview-category.model';
import { InterviewCategoryService } from '../../services/interview-category.service';

@Component({
  selector: 'app-interview-category-edit',
  templateUrl: './interview-category-edit.component.html',
  styleUrls: ['./interview-category-edit.component.scss'],
})
export class InterviewCategoryEditComponent implements OnInit {
  formInterviewData: FormGroup;
  interviewCategory: InterviewCategory;
  questionCategory: QuestionCategory;
  id: string;
  iid: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionCategoryService: QuestionCategoryService,
    private interviewCategoryService: InterviewCategoryService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.iid = this.route.snapshot.params['iid'];
  }

  ngOnInit(): void {
    if (!!this.id) {
      this.questionCategoryService
        .getQuestionCategoryById(this.id)
        .subscribe((data) => {
          this.questionCategory = {
            id: data.payload.id,
            ...(data.payload.data() as {}),
          } as QuestionCategory;

          if (!!this.iid) {
            this.interviewCategoryService
              .getInterviewCategoryById(this.questionCategory.Table, this.iid)
              .subscribe((data) => {
                this.interviewCategory = {
                  id: data.payload.id,
                  ...(data.payload.data() as {}),
                } as InterviewCategory;

                if (this.interviewCategory) {
                  this.formInterviewData.patchValue(this.interviewCategory);
                }
              });
          }
        });
    }

    this.formInterviewData = new FormGroup({
      IsCollapse: new FormControl(''),
      QuestionNo: new FormControl('', Validators.required),
      QuestionDesc: new FormControl('', Validators.required),
      QuestionRef: new FormControl(''),
      QuestionText: new FormControl('', Validators.required),
    });
  }

  update(interviewCategory) {
    debugger;
    this.interviewCategory.IsCollapse = interviewCategory.value.IsCollapse;
    this.interviewCategory.QuestionNo = interviewCategory.value.QuestionNo;
    this.interviewCategory.QuestionDesc = interviewCategory.value.QuestionDesc;
    this.interviewCategory.QuestionRef = interviewCategory.value.QuestionRef;
    this.interviewCategory.QuestionText = interviewCategory.value.QuestionText;

    if (this.formInterviewData.valid) {
      this.interviewCategoryService.updateInterviewCategory(
        this.questionCategory.Table,
        this.interviewCategory
      );
    }
  }

  submit(interviewCategory) {
    if (this.formInterviewData.valid) {
      this.interviewCategoryService.createInterviewCategory(
        this.questionCategory.Table,
        interviewCategory.value
      );
    }
  }

  cancel() {
    this.formInterviewData.reset();
  }
}
