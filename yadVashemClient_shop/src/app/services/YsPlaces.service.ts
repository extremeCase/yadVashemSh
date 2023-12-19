import { Injectable } from '@angular/core';
import { AvailablePlacesHour } from '../models/AvailablePlacesHour.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YsPlacesService {
  
  baseUrl: string = "https://localhost:7148/api/availablePlace/";

  constructor(private http: HttpClient) {}
  
  getHoursByPartOfTheDay(partOfDay: string): Observable<Array<AvailablePlacesHour>> {
    return this.http.get<Array<AvailablePlacesHour>>(this.baseUrl + "GetHourByPart/" + partOfDay);
  }

  getAvailablePlace(): Observable<number> {
    return this.http.get<number>(this.baseUrl + "GetSumPlaceInThisDay");
  }

}
