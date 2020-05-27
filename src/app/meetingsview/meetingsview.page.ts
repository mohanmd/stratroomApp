import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions,CalendarResult } from 'ion2-calendar';


// import { MeetingViewPoupPage } from '../meeting-view-poup/meeting-view-poup.page';
import { MeetingpopupPage } from '../meetingpopup/meetingpopup.page'
import { $ } from 'protractor';


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
  i: any;
  
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

  public actionCard = [];
  public actionCard1 = [];
  public noteCard = [];
  public noteCard1 = [];
    
  // add card
  addCard(){
    this.actionCard.push(this.actionCard);
  }

  addnoteCard(row){
    this.noteCard.push(row);
  }
  addactionCard(row): void {
    this.actionCard.push(row);
 }
  // removecard
  removeNoteCard(x){
   this.noteCard.splice(x);
  }
  removeNoteCard1(x){
   this.noteCard1.splice(x);
  }
  removeActionCard(x){
   this.actionCard.splice(x);
  }
  removeActionCard1(x){
   this.actionCard1.splice(x);
  }


}
