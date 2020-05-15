import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-swotpopup',
  templateUrl: './swotpopup.page.html',
  styleUrls: ['./swotpopup.page.scss'],
})
export class SwotpopupPage implements OnInit {

  constructor(public modalControler: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalControler.dismiss({
      'dismissed': true
    });
  }
}
