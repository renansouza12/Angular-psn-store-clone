import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlaceHolderComponent } from './card-place-holder.component';

describe('CardPlaceHolderComponent', () => {
  let component: CardPlaceHolderComponent;
  let fixture: ComponentFixture<CardPlaceHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPlaceHolderComponent]
    });
    fixture = TestBed.createComponent(CardPlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
