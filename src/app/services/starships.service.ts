import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, EMPTY, map } from "rxjs";
import { StarshipsResponse } from "../entities/starships";


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  constructor(private http: HttpClient ) { }

  getStarships(page?: string) {
   return this.http.get<StarshipsResponse>(`https://swapi.py4e.com/api/starships/?page=${page ?? 1}`)
     .pipe(
       map((res: StarshipsResponse) => res.results),
       catchError((err: HttpErrorResponse) => {
         console.error(err.message)
         return EMPTY
       })
     )
  }
}
