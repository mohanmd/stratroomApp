import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NgModule } from '@angular/core';


import { SwotpopupPage } from '../swotpopup/swotpopup.page';

@Component({
  selector: 'app-swot',
  templateUrl: './swot.page.html',
  styleUrls: ['./swot.page.scss'],
})
export class SwotPage implements OnInit {
  public buttonTrue: boolean;

  constructor(private route: Router, private modalControler: ModalController) { }

  ngOnInit() {
  }

  selectTabs = 'strenghts';

  goDetail(){
    this.route.navigate(['swotdetail']);
  }

    // Strenth
    async strengthAdd(value) {
      // alert('1')
      this.buttonTrue = true;
  
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          dataStrength: 'plus',
        }
      });
      return await modal.present();
    }
    // strenthedit
    async strengthEdit(value) {
      // alert('1')
      this.buttonTrue = true;
  
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          datastrengthEdit: 'plus',
        }
      });
      return await modal.present();
    }

    // weakness
    async weaknessAdd(value) {
      // alert('1')
      this.buttonTrue = true;
  
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          dataWeakness: 'plus',
        }
      });
  
      return await modal.present();
    }
    async weaknessEdit(value) {
      // alert('1')
      this.buttonTrue = true;
  
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          dataWeaknessEdit: 'plus',
        }
      });
  
      return await modal.present();
    }

    // oppurtunity
    async oppurtunityAdd(value) {
      // alert('1')
      this.buttonTrue = true;
  
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          dataOppurtunity: 'plus',
        }
      });
  
      return await modal.present();
    }

    async oppurtunityEdit(value) {
      // alert('1')
      this.buttonTrue = true;
  
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          dataOppurtunityEdit: 'plus',
        }
      });
  
      return await modal.present();
    }

    // Threats
    async threatsAdd(value) {
      // alert('1')
      this.buttonTrue = true;
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          dataThreats: 'plus',
        }
      });
      return await modal.present();
    }
    async threatsEdit(value) {
      // alert('1')
      this.buttonTrue = true;
      console.log(value);
      const modal = await this.modalControler.create({
        component: SwotpopupPage,
        componentProps: {
          dataThreatsEdit: 'plus',
        }
      });
      return await modal.present();
    }
}
