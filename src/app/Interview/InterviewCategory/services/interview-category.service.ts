import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { InterviewCategory } from '../models/interview-category.model';

@Injectable({
  providedIn: 'root',
})
export class InterviewCategoryService {
  constructor(private firestore: AngularFirestore) {}

  getQuestionCategory(tableName: string) {
    return this.firestore.collection(tableName).snapshotChanges();
  }

  getInterviewCategoryById(tableName: string, interviewCategoryId: string) {
    return this.firestore
      .collection(tableName)
      .doc(interviewCategoryId)
      .snapshotChanges();
  }

  createInterviewCategory(
    tableName: string,
    interviewCategory: InterviewCategory
  ) {
    return this.firestore.collection(tableName).add(interviewCategory);
  }

  updateInterviewCategory(
    tableName: string,
    interviewCategory: InterviewCategory
  ) {
    this.firestore
      .collection(tableName)
      .doc(interviewCategory.id)
      .update(interviewCategory);
  }

  deleteInterviewCategory(tableName: string, id: string) {
    this.firestore.collection(tableName).doc(id).delete();
  }
}
