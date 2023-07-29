import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMemberComponent } from './data-member.component';

describe('DataMemberComponent', () => {
  let component: DataMemberComponent;
  let fixture: ComponentFixture<DataMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataMemberComponent]
    });
    fixture = TestBed.createComponent(DataMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
