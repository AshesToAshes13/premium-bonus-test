import {Component, Input} from '@angular/core';
import {BeerInterface} from "../../interfaces/beer.interface";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]
})
export class BeerComponent {

  constructor() {}

  @Input() beer: BeerInterface

}
