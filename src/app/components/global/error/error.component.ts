import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  standalone: true,
  imports: [IonicModule],
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {

  constructor() { }

  @Input() errorText: string
  @Output() reloadList = new EventEmitter
  reload() {
    this.reloadList.emit()
  }

}
