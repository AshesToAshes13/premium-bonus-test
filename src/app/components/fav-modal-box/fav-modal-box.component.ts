import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {BeerInterface} from "../../interfaces/beer.interface";
import {BeerComponent} from "../beer/beer.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-fav-modal-box',
  templateUrl: './fav-modal-box.component.html',
  styleUrls: ['./fav-modal-box.component.scss'],
  standalone: true,
  imports: [IonicModule, BeerComponent, NgForOf, NgIf]
})
export class FavModalBoxComponent  implements OnInit {

  constructor() { }

  beersList: BeerInterface[]
  @Input() isShowModal: boolean
  @Output() closeModal = new EventEmitter<boolean>()
  ngOnInit() {
    const favoriteJSON = localStorage.getItem('favorite')
    if (favoriteJSON !== null) {
      this.beersList = JSON.parse(favoriteJSON)
    }
  }

  close(isShow: boolean) {
    this.closeModal.emit(isShow)
  }

}
