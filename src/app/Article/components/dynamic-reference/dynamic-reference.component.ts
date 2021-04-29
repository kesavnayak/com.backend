import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-reference',
  templateUrl: './dynamic-reference.component.html',
  styleUrls: ['./dynamic-reference.component.scss'],
})
export class DynamicReferenceComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() reference;

  ngOnInit() {
    this.fieldArray = this.reference;
  }
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  addFieldValue(index) {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    this.valueChange.emit(this.fieldArray);
  }
}
