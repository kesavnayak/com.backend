import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionCategory } from 'src/app/Interview/QuestionCategory/models/question-category.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionCategoryService } from '../../services/question-category.service';

@Component({
  selector: 'app-question-category-edit',
  templateUrl: './question-category-edit.component.html',
  styleUrls: ['./question-category-edit.component.scss'],
})
export class QuestionCategoryEditComponent implements OnInit {
  formData: FormGroup;
  questionCategory: QuestionCategory;
  id: string;

  constructor(
    private questionCategoryService: QuestionCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    if (!!this.id) {
      this.questionCategoryService
        .getQuestionCategoryById(this.id)
        .subscribe((data) => {
          this.questionCategory = {
            id: data.payload.id,
            ...(data.payload.data() as {}),
          } as QuestionCategory;

          if (this.questionCategory) {
            this.formData.patchValue(this.questionCategory);
          }
        });
    }
  }

  ngOnInit(): void {
    this.formData = new FormGroup({
      QuestionCategoryColor: new FormControl('', Validators.required),
      QuestionCategoryDesc: new FormControl('', Validators.required),
      QuestionCategoryName: new FormControl('', Validators.required),
      QuestionCategoryLogo: new FormControl('', Validators.required),
      Table: new FormControl('', Validators.required),
    });
  }

  update(questionCategory) {
    this.questionCategory.QuestionCategoryName =
      questionCategory.value.QuestionCategoryName;
    this.questionCategory.QuestionCategoryColor =
      questionCategory.value.QuestionCategoryColor;
    this.questionCategory.QuestionCategoryLogo =
      questionCategory.value.QuestionCategoryLogo;
    this.questionCategory.QuestionCategoryDesc =
      questionCategory.value.QuestionCategoryDesc;
    this.questionCategory.Table = questionCategory.value.Table;

    if (this.formData.valid) {
      this.questionCategoryService.updateQuestionCategory(
        this.questionCategory
      );
    }
  }

  submit(questionCategory) {
    if (this.formData.valid) {
      this.questionCategoryService.createQuestionCategory(
        questionCategory.value
      );
    }
  }

  cancel() {
    this.formData.reset();
  }
}
