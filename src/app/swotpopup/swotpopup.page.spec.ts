import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwotpopupPage } from './swotpopup.page';

describe('SwotpopupPage', () => {
  let component: SwotpopupPage;
  let fixture: ComponentFixture<SwotpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwotpopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwotpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
