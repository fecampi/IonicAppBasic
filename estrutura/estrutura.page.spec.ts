import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstruturaPage } from './estrutura.page';

describe('EstruturaPage', () => {
  let component: EstruturaPage;
  let fixture: ComponentFixture<EstruturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstruturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstruturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
