import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TunggalPage } from './tunggal.page';

describe('TunggalPage', () => {
  let component: TunggalPage;
  let fixture: ComponentFixture<TunggalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunggalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TunggalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
