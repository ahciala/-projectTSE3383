import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MahramPage } from './mahram.page';

describe('MahramPage', () => {
  let component: MahramPage;
  let fixture: ComponentFixture<MahramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MahramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
