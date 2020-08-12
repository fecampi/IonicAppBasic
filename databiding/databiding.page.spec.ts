import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatabidingPage } from './databiding.page';

describe('DatabidingPage', () => {
  let component: DatabidingPage;
  let fixture: ComponentFixture<DatabidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabidingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatabidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
