import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss'],
})
export class MultiSelectDropdownComponent {
  @Input() list: any[];
  @Input() dropdownName: any;

  @Output() shareCheckedList = new EventEmitter();
  @Output() shareIndividualCheckedList = new EventEmitter();

  checkedList: any[];
  currentSelected: {};
  checkedListLength: any;
  showDropDown: boolean;

  constructor() {
    this.checkedList = [];
    this.dropdownName = '';
    this.showDropDown = false;
  }

  // ngOnInit() {
  // }
  getSelectedValue(status: boolean, value: string) {
    if (status) {
      this.checkedList.push(value);
    } else {
      const index = this.checkedList.indexOf(value);
      this.checkedList.splice(index, 1);
    }

    this.currentSelected = { checked: status, name: value };

    // share checked list
    this.shareCheckedlist();

    // share individual selected item
    this.shareIndividualStatus();
  }
  shareCheckedlist() {
    this.checkedListLength = this.checkedList.length;
    this.shareCheckedList.emit(this.checkedList);
  }
  shareIndividualStatus() {
    this.shareIndividualCheckedList.emit(this.currentSelected);
  }
}
