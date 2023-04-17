import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {BeerInterface} from "../../interfaces/beer.interface";
import {BeerComponent} from "../beer/beer.component";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fav-modal-box',
  templateUrl: './fav-modal-box.component.html',
  styleUrls: ['./fav-modal-box.component.scss'],
  standalone: true,
  imports: [IonicModule, BeerComponent, NgForOf, NgIf]
})
export class FavModalBoxComponent implements OnChanges {

  constructor(private router: Router) { }

  beersList: BeerInterface[]
  ngOnChanges(changes: SimpleChanges): void {
      const favoriteJSON = localStorage.getItem('favorite')
      if (favoriteJSON !== null) {
        this.beersList = JSON.parse(favoriteJSON)
      } else {
        this.beersList = []
      }
    }

  @Input() isShowModal: boolean
  @Output() closeModal = new EventEmitter<boolean>()

  close(isShow: false) {
    this.closeModal.emit(isShow)
  }
  goToDetail(isShow: boolean, beerId: number) {
    this.closeModal.emit(isShow)
    // пришлось использовать таймаут т.к при изменении роута модалка не закрывалась хотя эмит работал нормально
    setTimeout(()=> {
      return this.router.navigateByUrl(`/detail/${beerId}`)
    }, 0)
  }

}
