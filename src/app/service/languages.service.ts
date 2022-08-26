import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  baseUrl: string;
  apiKey: string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '971e172c7356bde6de5c6f89c1f776cb';
  }

  getLanguages(): Observable<any> {
    return this.http.get(`${this.baseUrl}configuration/languages?api_key=${this.apiKey}`);
  }
}
