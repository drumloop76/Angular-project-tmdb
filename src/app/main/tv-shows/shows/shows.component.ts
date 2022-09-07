import { Component, OnInit } from '@angular/core';
import { TvShowsService } from 'src/app/service/tv-shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  allSeries: any;
  genres: any;
  ids!: number;
  page: number = 1;
  collectionSize: number = 0;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  pageCount : number = 0;

  showGenres: any[] = [];
  anima: number = 16;

  constructor(private service: TvShowsService) { }

  ngOnInit(): void {
    this.getSfTopRatedSeries(this.page, this.anima);
    this.getShowGenres();
  }

  getSfTopRatedSeries(page: number, anima: number) {
    this.service.getSfTopRatedSeries(page, anima).subscribe((data: any) => {
      // console.log(data)
      this.allSeries = data.results;
      this.collectionSize = data.total_results;
      this.itemsPerPage = data.results.length;
    });
  }

  onSwitchCategoryClick(event:any) {
    if(!event.target.checked) {
      this.anima = 16;
      this.getSfTopRatedSeries(this.page, this.anima);
    } else if(event.target.checked) {
      this.anima = 0;
      this.getSfTopRatedSeries(this.page, this.anima);
    }
  }

  selectCategory(event: any) {
    this.service.setCategory(event.value)
    this.getSfTopRatedSeries(this.page, this.anima);
  }

  getShowGenres() {
    this.service.getShowGenres().subscribe((res: any) => {
      let arr = res.genres;
      arr.map((a:any) => {
        if(a.name !== 'Animation') {
          this.showGenres.push(a)
        }
      })
    });
  }

  onPageChanged(newPage: any) {
    // console.log(newPage)
    this.page = newPage;
    this.currentPage = this.page;
    this.getSfTopRatedSeries(this.page, this.anima);
  }
}

