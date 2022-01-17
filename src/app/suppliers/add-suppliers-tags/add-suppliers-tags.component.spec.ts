import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddSuppliersTagsComponent} from './add-suppliers-tags.component';

describe('AddSuppliersTagsComponent', () => {
  let component: AddSuppliersTagsComponent;
  let fixture: ComponentFixture<AddSuppliersTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSuppliersTagsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuppliersTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
