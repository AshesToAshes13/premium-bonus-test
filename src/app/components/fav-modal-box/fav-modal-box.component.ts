import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-fav-modal-box',
  templateUrl: './fav-modal-box.component.html',
  styleUrls: ['./fav-modal-box.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class FavModalBoxComponent  implements OnInit {

  constructor() { }

  @Input() isShowModal: boolean
  @Output() closeModal = new EventEmitter<boolean>()
  ngOnInit() {}

  close(isShow: boolean) {
    this.closeModal.emit(isShow)
  }

}
