import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {BeerService} from "../../services/beer.service";
import {ActivatedRoute} from "@angular/router";
import {BeerInterface} from "../../interfaces/beer.interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailPage implements OnInit {

  constructor(private beerService: BeerService) { }

  private activatedRoute = inject(ActivatedRoute);
  beer: BeerInterface | null
  isInFav: boolean = false

  changeFavorite(currentBeer: BeerInterface) {
    const favorite =  localStorage.getItem('favorite')
    if (favorite !== null) {
      const fav: BeerInterface[] = JSON.parse(favorite) as []
      if (this.isInFav) {
        this.isInFav = false
        const filteredArr = fav.filter((beer) => beer.id !== currentBeer.id)
        localStorage.setItem('favorite', JSON.stringify(filteredArr))
      } else {
        this.isInFav = true
        fav.push(currentBeer)
        localStorage.setItem('favorite', JSON.stringify(fav))
      }
    } else {
      this.isInFav = true
      localStorage.setItem('favorite', JSON.stringify([currentBeer]))
    }
  }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.beerService.getSingleBeer(+id).subscribe((beer) => {
      this.beer = beer[0]
    })
    const favoriteJSON = localStorage.getItem('favorite')
    if (favoriteJSON !== null) {
      const favorite: BeerInterface[] = JSON.parse(favoriteJSON)
      const currentBeerInFav = favorite.find((beer) => beer.id === +id)
      currentBeerInFav ? this.isInFav = true : this.isInFav = false
    }
  }
}
