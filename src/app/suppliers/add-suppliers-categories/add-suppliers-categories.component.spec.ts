import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddSuppliersCategoriesComponent} from './add-suppliers-categories.component';

describe('AddSuppliersCategoriesComponent', () => {
  let component: AddSuppliersCategoriesComponent;
  let fixture: ComponentFixture<AddSuppliersCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSuppliersCategoriesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuppliersCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
