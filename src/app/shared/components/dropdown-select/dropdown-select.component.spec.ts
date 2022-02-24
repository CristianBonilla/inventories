import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectComponent } from '@shared/components/dropdown-select/dropdown-select.component';

describe('DropdownSelectComponent', () => {
  let component: DropdownSelectComponent;
  let fixture: ComponentFixture<DropdownSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
