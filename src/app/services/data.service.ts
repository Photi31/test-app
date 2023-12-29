import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, EMPTY, map } from "rxjs";
import { People } from "../entities/people";
import { Film } from "../entities/film";

export type DataResponse = People | Film

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get<DataResponse>(`${url}`)
      .pipe(
        map((res: DataResponse) => {
          return res
        }),
        catchError((err: HttpErrorResponse) => {
          console.error(err.message)
          return EMPTY
        })
      )
  }
}
