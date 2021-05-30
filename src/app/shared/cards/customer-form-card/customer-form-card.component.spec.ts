import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormCardComponent } from './customer-form-card.component';

describe('CustomerFormCardComponent', () => {
  let component: CustomerFormCardComponent;
  let fixture: ComponentFixture<CustomerFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
