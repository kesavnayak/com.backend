import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionCategory } from '../../models/question-category.model';
import { QuestionCategoryService } from '../../services/question-category.service';

@Component({
  selector: 'app-question-category',
  templateUrl: './question-category.component.html',
  styleUrls: ['./question-category.component.scss'],
})
export class QuestionCategoryComponent implements OnInit {
  questionCategories: QuestionCategory[];
  constructor(
    private questionCategoryService: QuestionCategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questionCategoryService.getQuestionCategory().subscribe((data) => {
      this.questionCategories = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as QuestionCategory;
      });
    });
  }

  create() {
    this.router.navigate(['/QuestionCategoryCreate']);
  }

  update(id: string) {
    this.router.navigate(['/Update/' + id]);
  }

  delete(id: string) {
    this.questionCategoryService.deleteQuestionCategory(id);
  }
  details(id: string) {
    this.router.navigate(['/Details/' + id]);
  }
}
