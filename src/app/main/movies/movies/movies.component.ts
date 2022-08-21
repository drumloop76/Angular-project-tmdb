import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allMovies: any[] = [];
  mov: any[] = [];
  ids!: number;
  page: number = 1;
  collectionSize: number = 0;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  pageCount : number = 0;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getSfTopRatedMovies(1);
  }

  getSfTopRatedMovies(page: number) {
    this.service.getSfTopRatedMovies(page, this.collectionSize).subscribe((data: any) => {
      // console.log(data)
      this.allMovies = data.results;
      this.mov = data.results;
      this.collectionSize = data.total_results;
      this.itemsPerPage = data.results.length;
    });
  }

  onPageChanged(newPage: any) {
    // console.log(newPage)
    this.page = newPage;
    this.currentPage = this.page;
    this.getSfTopRatedMovies(this.page);
  }
}

