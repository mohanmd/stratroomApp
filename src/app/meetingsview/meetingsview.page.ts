import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions,CalendarResult } from 'ion2-calendar';


// import { MeetingViewPoupPage } from '../meeting-view-poup/meeting-view-poup.page';
import { MeetingpopupPage } from '../meetingpopup/meetingpopup.page'


@Component({
  selector: 'app-meetingsview',
  templateUrl: './meetingsview.page.html',
  styleUrls: ['./meetingsview.page.scss'],
})
export class MeetingsviewPage implements OnInit {
  selectTabs = 'view';
  dateRange: { from: 0; to: 30; };
  type: 'string';
  public buttonTrue: boolean;

  card: any;
  
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    // monthPickerFormat: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    monthFormat:'MMM YYYY'	,
  };

  constructor(public modalCtrl: ModalController, private modalControler: ModalController) { }

  async openCalendar() {
    const options: CalendarModalOptions = {
      title: 'Range',
      pickMode: 'range',
      color:'dark',cssClass: 'dayOff',
      
    };
    

  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options }
  });

  myCalendar.present();    
  const event: any = await myCalendar.onDidDismiss();
  const date = event.data;
  const from: CalendarResult = date.from;
  const to: CalendarResult = date.to;

  console.log(date, from, to);
}

  ngOnInit() {
    // this.openCalendar()
  }



  async addPopupAcction(value) {
    // alert('1')
    this.buttonTrue = true;

    console.log(value);
    const modal = await this.modalControler.create({
      component: MeetingpopupPage,
      componentProps: {
        dataAction: 'plus',
      }
    });

    return await modal.present();
  }

  
  async PopupNotes(value) {
    // alert('1')
    this.buttonTrue = true;

    console.log(value);
    const modal = await this.modalControler.create({
      component: MeetingpopupPage,
      componentProps: {
        addNotes: 'plus',
      }
    });

    return await modal.present();
  } 


  async editpopupView(value) {
    // alert('1')
    this.buttonTrue = true;

    console.log(value);
    const modal = await this.modalControler.create({
      component: MeetingpopupPage,
      componentProps: {
        editData: 'plus',
      }
    });

    return await modal.present();
  }

    
  // add card
  addCard(){
    alert('Card is Added');
    let cardPrent = document.querySelector('.action_tab');
    // let card = '<ion-card><ion-buttons class="action_btns" ><ion-button  ><ion-icon   src="assets/icon/Edit.svg" color="light" size="small"></ion-icon></ion-button><ion-button ><ion-icon  src="assets/icon/Delete.svg" color="light" size="small"></ion-icon></ion-button></ion-buttons><ion-item  lines="none" ><ion-textarea class="cust_input"></ion-textarea></ion-item><ion-row class="ion-align-items-center"><ion-col size="6"><ion-item lines="none"><div class="attendees-profile display-flex align-item-center"><div class="attendees-list ion-justify-content-end"><ion-img  src="assets/profile/profile1.png"></ion-img><p class="more">+</p></div> </div></ion-item></ion-col><ion-col size="6" class="ion-text-right date_col"><ion-img src="../../assets/icon/Calender.png"></ion-img><ion-datetime value="2019-10-01T15:43:40.394Z" display-timezone="utc" ></ion-datetime></ion-col></ion-row></ion-card>' ;
   
   let p = document.createElement('p');
    let card = document.querySelector('.actioncard_content');
    p.append(card);
    cardPrent.appendChild(p)
    console.log(card);
  }

}
