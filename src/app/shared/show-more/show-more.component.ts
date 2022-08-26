import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {
  @Input() text: any;
  @Input() textLength: number = 130;

  isShowMore: boolean = false;
  showText: string = "";
  fullText: string = "";

  constructor() { }

  ngOnInit(): void {
    this.fullText = this.text;
    this.textLength = this.fullText.substring(0, this.textLength).lastIndexOf(' ');
    this.text = `${this.fullText.substring(0, this.textLength)}...`
  }

  toggleShow() {
    this.isShowMore = !this.isShowMore;
    this.text = this.isShowMore ? this.fullText : `${this.fullText.substring(0, this.textLength)}...`;
  }

}


