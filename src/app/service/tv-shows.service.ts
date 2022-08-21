import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  sciFiGenre: string;
  page: number = 1;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '971e172c7356bde6de5c6f89c1f776cb';
    this.language = 'en-US';
    this.region = 'US';
    this.sciFiGenre = '10765';
  }

  getPopularSeries(): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&with_genres=${this.sciFiGenre}&language=${this.language}`);
  }
}
