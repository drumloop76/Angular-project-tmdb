import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  sciFiGenre: string;
  page: number = 1;
  category: string = 'multi';

  constructor(private http: HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '971e172c7356bde6de5c6f89c1f776cb';
    this.language = 'en-US';
    this.region = 'US';
    this.sciFiGenre = '878';
  }

  setCategory(value: any) {
    this.category = value;
  }

  search(term: string): Observable<any> {
    if (term === '') {      
      return of([]);
    }
    // console.log(this.category)
    return this.http.get(`${this.baseUrl}search/${this.category}?api_key=${this.apiKey}&query=${term}&language=${this.language}&include_adult=false`)
      .pipe(map((data: any) => {
          return data.results
        }),
        tap(res => console.log({res}))
      );
  }
}
