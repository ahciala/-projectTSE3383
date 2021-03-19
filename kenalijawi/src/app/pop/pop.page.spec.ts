import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopPage } from './pop.page';

describe('PopPage', () => {
  let component: PopPage;
  let fixture: ComponentFixture<PopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
