import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() collectionSize: number = 1;
  @Input() pageSize: number = 1;
  @Output() onChange: EventEmitter<number> = new EventEmitter();
  page: number = 1;
  currentPage: number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged(newPage: number) {
    // console.log(newPage)
    this.currentPage = newPage;
    this.onChange.emit(this.currentPage);
  }
}
