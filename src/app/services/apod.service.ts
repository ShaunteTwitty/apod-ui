import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Payload } from '../../models/payload';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  apikey: string ='3a7uiMmJx7Ni6YtjGQIDIdDdnN32ngR5Tgq0JT7p';
  static readonly BASE_API_URL: string = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<Payload> {
    return this.http.get<Payload>(`${ApodService.BASE_API_URL}?api_key=${this.apikey}`)  
  }
 }
