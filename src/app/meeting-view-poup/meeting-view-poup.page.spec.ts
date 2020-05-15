import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetingViewPoupPage } from './meeting-view-poup.page';

describe('MeetingViewPoupPage', () => {
  let component: MeetingViewPoupPage;
  let fixture: ComponentFixture<MeetingViewPoupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingViewPoupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetingViewPoupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
