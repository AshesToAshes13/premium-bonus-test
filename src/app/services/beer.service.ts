import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BeerService {
  constructor(private http: HttpClient) {
  }
  getAllBeers() {
    return this.http.get('https://api.punkapi.com/v2/beers')
  }
}
