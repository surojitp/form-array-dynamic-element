import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoUserComponent } from './co-user.component';

describe('CoUserComponent', () => {
  let component: CoUserComponent;
  let fixture: ComponentFixture<CoUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoUserComponent]
    });
    fixture = TestBed.createComponent(CoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
