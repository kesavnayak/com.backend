import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-feature',
  templateUrl: './dynamic-feature.component.html',
  styleUrls: ['./dynamic-feature.component.scss'],
})
export class DynamicFeatureComponent implements OnInit {
  @Output() valueChange = new EventEmitter();

  @Input() features;

  ngOnInit() {
    this.fieldArray = this.features;
  }
  fieldArray = [];
  newAttribute: any = {};

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
