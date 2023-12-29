import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {catchError, EMPTY, map } from "rxjs";
import {People} from "../starships/ship/ship.component";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(url: string) {
    return this.http.get<People>(`${url}`)
      .pipe(
        map((res: People) => {
          console.log(res)
          return res
        }),
        catchError((err: HttpErrorResponse) => {
          console.error(err.message)
          return EMPTY
        })
      )
  }
}
