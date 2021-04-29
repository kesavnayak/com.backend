import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { QuestionCategory } from '../models/question-category.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionCategoryService {
  constructor(private firestore: AngularFirestore) {}

  getQuestionCategory() {
    return this.firestore.collection('QuestionCategory').snapshotChanges();
  }

  getQuestionCategoryById(questionCategoryId: string) {
    return this.firestore
      .collection('QuestionCategory')
      .doc(questionCategoryId)
      .snapshotChanges();
  }

  createQuestionCategory(questionCategory: QuestionCategory) {
    return this.firestore.collection('QuestionCategory').add(questionCategory);
  }

  updateQuestionCategory(questionCategory: QuestionCategory) {
    this.firestore
      .collection('QuestionCategory')
      .doc(questionCategory.id)
      .update(questionCategory);
  }

  deleteQuestionCategory(questionCategoryId: string) {
    this.firestore
      .collection('QuestionCategory')
      .doc(questionCategoryId)
      .delete();
  }
}
