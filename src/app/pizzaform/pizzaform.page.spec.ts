import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaformPage } from './pizzaform.page';

describe('PizzaformPage', () => {
  let component: PizzaformPage;
  let fixture: ComponentFixture<PizzaformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
