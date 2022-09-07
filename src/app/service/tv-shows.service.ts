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
  anima: any;

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

  setCategory(value: string): void {
    this.sciFiGenre = `10765,${value}`
    this.getSfTopRatedSeries(this.page, this.anima)
  }
  
  getSfTopRatedSeries(page: number, anima: number): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&sort_by=popularity.desc&with_genres=${this.sciFiGenre}&without_genres=${anima}&language=${this.language}&include_adult=false&page=${page}`);
  }

  getOneShowDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getShowCredits(id: string) {
    return this.http.get(`${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}&language=${this.language}`);
  }

  getShowImages(id: string) {
    return this.http.get(`${this.baseUrl}tv/${id}/images?api_key=${this.apiKey}`);
  }

  getShowVideos(id: any) {
    return this.http.get(`${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}&language=${this.language}`);
  }

  getShowReviews(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/reviews?api_key=${this.apiKey}&language=${this.language}&page=1`);
  }

  // getShowSeasons(id: any, season: any) {
  //   return this.http.get(`${this.baseUrl}tv/${id}/season/{season_number}?api_key=${this.apiKey}&language=${this.language}`);
  // }

  // getShowEpisode(id: any, season: sny, episode: any) {
  //   return this.http.get(`${this.baseUrl}tv/${id}/season/{season_number}/episode/{episode_number}?api_key=${this.apiKey}&language=${this.language}`);
  // }

  getSimilarSeries(id: string) {
    return this.http.get(`${this.baseUrl}tv/${id}/similar?api_key=${this.apiKey}&language=${this.language}`);
  }

  getShowGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`);
  }
}
