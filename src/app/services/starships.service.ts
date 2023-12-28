import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Starship } from "../starships/starships.component";
import { BehaviorSubject, catchError, EMPTY } from "rxjs";

export interface StarshipsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Starship[]
}

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  starships$ = new BehaviorSubject<Starship[]>([])
  constructor(private http: HttpClient) { }

  getStarships(page?: string) {
   this.http.get<StarshipsResponse>(`https://swapi.py4e.com/api/starships11/?page=${page ?? 1}`)
     .pipe(
       catchError((err: HttpErrorResponse) => {
         console.error(err.message)
         return EMPTY
       })
     )
     .subscribe((res: StarshipsResponse) => {
       this.starships$.next(res.results)
     })
  }
}
