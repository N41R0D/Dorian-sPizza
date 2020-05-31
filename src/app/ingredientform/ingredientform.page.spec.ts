import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientformPage } from './ingredientform.page';

describe('IngredientformPage', () => {
  let component: IngredientformPage;
  let fixture: ComponentFixture<IngredientformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
