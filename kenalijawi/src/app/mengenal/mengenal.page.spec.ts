import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MengenalPage } from './mengenal.page';

describe('MengenalPage', () => {
  let component: MengenalPage;
  let fixture: ComponentFixture<MengenalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MengenalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MengenalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
