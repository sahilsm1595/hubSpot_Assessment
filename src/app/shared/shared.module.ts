import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { FormsModule } from '@angular/forms';
import { SortnamePipe } from './sortname.pipe';

@NgModule({
  declarations: [MultiSelectDropdownComponent, SortnamePipe],
  imports: [CommonModule, FormsModule],
  exports: [MultiSelectDropdownComponent, SortnamePipe],
})
export class SharedModule {}
