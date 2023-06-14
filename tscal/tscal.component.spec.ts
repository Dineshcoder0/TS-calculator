import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TscalComponent } from './tscal.component';

describe('TscalComponent', () => {
  let component: TscalComponent;
  let fixture: ComponentFixture<TscalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TscalComponent]
    });
    fixture = TestBed.createComponent(TscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
