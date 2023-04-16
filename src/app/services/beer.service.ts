import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BeerInterface} from "../interfaces/beer.interface";

@Injectable({
  providedIn: 'root'
})

export class BeerService {
  constructor(private http: HttpClient) {
  }
  getAllBeers() {
    return this.http.get<BeerInterface[]>('https://api.punkapi.com/v2/beers')
  }
}
