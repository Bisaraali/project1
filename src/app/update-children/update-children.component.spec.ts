import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChildrenComponent } from './update-children.component';

describe('UpdateChildrenComponent', () => {
  let component: UpdateChildrenComponent;
  let fixture: ComponentFixture<UpdateChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChildrenComponent]
    });
    fixture = TestBed.createComponent(UpdateChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
