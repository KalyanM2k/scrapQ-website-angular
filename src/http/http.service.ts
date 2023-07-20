
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})



export class HttpService {
  constructor(private http: HttpClient) {}
  

  async get(url: string) {
    const headers = await this.getHeaders();
    return this.http
      .get(url, headers)
  }

  async getHeaders() {
    
    const headersObj: any = {
      'Content-Type': 'application/json',
      'App-Id': 'WEBSITE',
      'Client-Type': 'WEB',
    };

    const mainHeaders: any = {
      headers: new HttpHeaders(headersObj),
    };

   

    return mainHeaders;
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}


