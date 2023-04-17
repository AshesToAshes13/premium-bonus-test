import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BeerInterface} from "../interfaces/beer.interface";

@Injectable({
  providedIn: 'root'
})

export class BeerService {
  constructor(private http: HttpClient) {
  }
  getAllBeers(page: number) {
    return this.http.
      get<BeerInterface[]>('https://api.punkapi.com/v2/beers', {
      params: new HttpParams({
        fromObject: {page: page, per_page: 5}
      })
    })
  }

  getSingleBeer(id: number) {
    return this.http.
      get<BeerInterface[]>(`https://api.punkapi.com/v2/beers/${id}`)
  }
}
