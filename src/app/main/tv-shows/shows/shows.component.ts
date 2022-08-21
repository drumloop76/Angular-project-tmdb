import { Component, OnInit } from '@angular/core';
import { TvShowsService } from 'src/app/service/tv-shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  allSeries: any;
  show: any;
  genres: any;
  ids!: number;
  page: number = 1;
  collectionSize: number = 0;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  pageCount : number = 0;

  constructor(private service: TvShowsService) { }

  ngOnInit(): void {
    this.getSfTopRatedSeries(1);
  }

  getSfTopRatedSeries(page: number) {
    this.service.getSfTopRatedSeries(page, this.collectionSize).subscribe((data: any) => {
      // console.log(data)
      this.allSeries = data.results;
      this.show = data.results;
      this.collectionSize = data.total_results;
      this.itemsPerPage = data.results.length;
    });
  }

  onPageChanged(newPage: any) {
    // console.log(newPage)
    this.page = newPage;
    this.currentPage = this.page;
    this.getSfTopRatedSeries(this.page);
  }
}

