import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HukumPage } from './hukum.page';

describe('HukumPage', () => {
  let component: HukumPage;
  let fixture: ComponentFixture<HukumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HukumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HukumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
