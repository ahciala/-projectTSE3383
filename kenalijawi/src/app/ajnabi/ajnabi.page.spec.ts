import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjnabiPage } from './ajnabi.page';

describe('AjnabiPage', () => {
  let component: AjnabiPage;
  let fixture: ComponentFixture<AjnabiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjnabiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjnabiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
