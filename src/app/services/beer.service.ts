import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {BeerInterface} from "../interfaces/beer.interface";
import {catchError, throwError} from "rxjs";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})

export class BeerService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }
  getAllBeers(page: number) {
    return this.http.
      get<BeerInterface[]>('https://api.punkapi.com/v2/beers', {
      params: new HttpParams({
        fromObject: {page: page, per_page: 5}
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  getSingleBeer(id: number) {
    return this.http.
      get<BeerInterface[]>(`https://api.punkapi.com/v2/beers/${id}`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(true)
    return throwError(() => error.message)
  }
}
