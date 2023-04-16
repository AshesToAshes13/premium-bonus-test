import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {BeerService} from "../../services/beer.service";
import {BeerInterface} from "../../interfaces/beer.interface";
import {Observable} from "rxjs";
import {BeerComponent} from "../../components/beer/beer.component";
import {CommonModule} from "@angular/common";
import {FavModalBoxComponent} from "../../components/fav-modal-box/fav-modal-box.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, BeerComponent, CommonModule, FavModalBoxComponent],
})
export class HomePage implements OnInit {
  constructor(private beerService: BeerService) {}

  beersList$: Observable<BeerInterface[]>
  currentPage: number = 1
  pages: {page: number}[] = [{page: 1}, {page: 2}, {page: 3}]
  isModalOpen: boolean = false
  isLoading: boolean = true

  changePage(page: number) {
    if (page !== this.currentPage) {
      this.isLoading = true
      this.currentPage = page
      this.beersList$ = this.beerService.getAllBeers(this.currentPage)
      this.isLoading = false
    }
  }
  ngOnInit(): void {
    this.beersList$ = this.beerService.getAllBeers(this.currentPage)
    this.isLoading = false
  }
}
