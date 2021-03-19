import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsasPage } from './asas.page';

describe('AsasPage', () => {
  let component: AsasPage;
  let fixture: ComponentFixture<AsasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
