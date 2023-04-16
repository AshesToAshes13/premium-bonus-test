import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {BeerService} from "../services/beer.service";
import {BeerInterface} from "../interfaces/beer.interface";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  constructor(private beerService: BeerService) {}

  beersList: BeerInterface[] = []
  ngOnInit(): void {
    this.beerService.getAllBeers().subscribe((beers) => {
      this.beersList = beers as BeerInterface[]
    })
  }
}
