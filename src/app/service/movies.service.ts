import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  sciFiGenre: string;
  page: number = 1;
  anima: any;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '971e172c7356bde6de5c6f89c1f776cb';
    this.language = 'en-US';
    this.region = 'US';
    this.sciFiGenre = '878';
  }

  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&with_genres=${this.sciFiGenre}&page=${this.page}&with_original_language=en&language=${this.language}`);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&with_genres=${this.sciFiGenre}&page=${this.page}&language=${this.language}`);
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&with_genres=${this.sciFiGenre}&page=${this.page}&language=${this.language}`);
  }
  
  setCategory(value: string): void {
    this.sciFiGenre = `878,${value}`
    this.getSfTopRatedMovies(this.page, this.anima)
  }
  getSfTopRatedMovies(page: number, anima: number): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&with_genres=${this.sciFiGenre}&without_genres=${anima}&language=${this.language}&include_adult=false&page=${page}`);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`);
  }

  getMovieImages(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`);
  }

  getSimilarMovies(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/similar?api_key=${this.apiKey}&with_genres=${this.sciFiGenre}&language=${this.language}&page=1`);
  }

  getMovieReviews(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}&language=${this.language}&page=1`);
  }

  getTopRated(): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&sort_by=vote_count.desc&with_genres=${this.sciFiGenre}&language=en-US&page=1`);
  }

  getMoviesGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
  }
}

