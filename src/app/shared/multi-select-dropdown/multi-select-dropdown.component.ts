import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss'],
})
export class MultiSelectDropdownComponent implements OnChanges {
  @Input() list: any[];
  @Input() dropdownName: any;
  @Input() listLength = true;

  @Output() shareCheckedList = new EventEmitter();
  @Output() shareIndividualCheckedList = new EventEmitter();

  checkedList: any[];
  currentSelected: {};
  checkedListLength: any;
  showDropDown: boolean;
  isClear: boolean;

  constructor() {
    this.checkedList = [];
    this.dropdownName = '';
    this.showDropDown = false;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.listLength) {
      this.isClear = changes.listLength.currentValue;
      this.checkedListLength = 0;
      this.checkedList = [];
      this.isClear = true;
    }
  }

  // selected value from dropdown
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
