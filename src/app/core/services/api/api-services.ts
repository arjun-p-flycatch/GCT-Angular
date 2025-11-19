import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiServices {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl
  
  get<T , U extends Record<string , any>>(endpoint: string, params?: U): Observable<T> {
      return this.http.get<T>(`${this.baseUrl}${endpoint}`, {params , headers: this.getHeaders()});
  }
  post<T,U> (endpoint:string,data:U):Observable<T>{
    return this.http.post<T>(this.baseUrl + endpoint,data,{ headers: this.getHeaders()})
  }
   delete<T> (endpoint:string,id:number):Observable<T>{
    return this.http.delete<T>(`${this.baseUrl}${endpoint}/${id}`)
  }
   put<T,U> (endpoint:string,data:U):Observable<T>{
    return this.http.put<T>(this.baseUrl + endpoint,data)
  }
   patch<T,U> (endpoint:string,data:U):Observable<T>{
    return this.http.patch<T>(this.baseUrl + endpoint,data)
  }

  // private buildUrl(endpoint: string): string {
  //   const cleanEndpoint = endpoint.replace(/^\/+|\/+$/g, '');
  //   return `${this.baseUrl}/${cleanEndpoint}`;
  // }
   private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }
}

