import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  sciFiMovieGenre: string;
  sciFiTVGenre: string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '971e172c7356bde6de5c6f89c1f776cb';
    this.language = 'en-US';
    this.region = 'US';
    this.sciFiMovieGenre = '878';
    this.sciFiTVGenre = '10765';
  }

  getPerson(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}&language=${this.language}`);
  }

  getPersonImages(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}/images?api_key=${this.apiKey}`);
  }

  getPersonTaggedImages(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}/tagged_images?api_key=${this.apiKey}&language=${this.language}&page=1`);
  }

  getPersonMovieCredits(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}/combined_credits?api_key=${this.apiKey}`);
  }

  // getMovieCredit(credit_id: any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}credit/${credit_id}?api_key=${this.apiKey}`);
  // }

}
