import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Cat } from "../_models/cat";
import { MessageService } from "./message.service";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private urlCat = environment.url_api + environment.url_cat;  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService

  ) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.urlCat)
      .pipe(
        tap(_ => ''),
        catchError(this.handleError('Error while laoding the pussies', []))
      );
  }

  /** GET AMR from the server */
  getCat(id: number): Observable<Cat> {
    const url = `${this.urlCat}/${id}`;
    return this.http.get<Cat>(url).pipe(
      tap(_ => ''),
      catchError(this.handleError<Cat>('Error while laoding the puss' + id))
    );
  }


  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} erreur: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
      
    };
  }
  /** Log a MEDDService message with the MessageService */
  private log(message: string) {

    this.messageService.add(`AMRService: ${message}`);

  }


}
