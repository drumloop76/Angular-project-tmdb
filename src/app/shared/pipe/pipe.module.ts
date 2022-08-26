import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { LanguagePipe } from './language.pipe';
import { FilterArrayPipe } from './filter-array.pipe';



@NgModule({
  declarations: [
    TimePipe,
    SafeUrlPipe,
    LanguagePipe,
    FilterArrayPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LanguagePipe,
    SafeUrlPipe,
    TimePipe,
    FilterArrayPipe,
  ],
})
export class PipeModule { }
