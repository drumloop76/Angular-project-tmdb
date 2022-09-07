import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allMovies: any[] = [];
  ids!: number;
  page: number = 1;
  collectionSize: number = 0;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  pageCount : number = 0;

  movGenres: any[] = [];
  anima: number = 16;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getSfTopRatedMovies(this.page, this.anima);
    this.getMoviesGenres();
  }

  getSfTopRatedMovies(page: number, anima: number) {
    this.service.getSfTopRatedMovies(page, anima).subscribe((data: any) => {
      // console.log(data)
      this.allMovies = data.results;
      this.collectionSize = data.total_results;
      this.itemsPerPage = data.results.length;
    });
  }

  onSwitchCategoryClick(event:any) {
    if(!event.target.checked) {
      this.anima = 16;
      this.getSfTopRatedMovies(this.page, this.anima);
    } else if(event.target.checked) {
      this.anima = 0;
      this.getSfTopRatedMovies(this.page, this.anima);
    }
  }

  selectCategory(event: any) {
    this.service.setCategory(event.value)
    this.getSfTopRatedMovies(this.page, this.anima);
  }

  getMoviesGenres() {
    this.service.getMoviesGenres().subscribe((res: any) => {
      let arr = res.genres;
      arr.map((a:any) => {
        if(a.name !== 'Animation') {
          this.movGenres.push(a)
        }
      })
    });
  }

  onPageChanged(newPage: any) {
    // console.log(newPage)
    this.page = newPage;
    this.currentPage = this.page;
    this.getSfTopRatedMovies(this.page, this.anima);
  }
}

