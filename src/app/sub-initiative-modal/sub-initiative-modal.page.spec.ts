import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubInitiativeModalPage } from './sub-initiative-modal.page';

describe('SubInitiativeModalPage', () => {
  let component: SubInitiativeModalPage;
  let fixture: ComponentFixture<SubInitiativeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubInitiativeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubInitiativeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
