import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingIconsComponent } from './sliding-icons.component';

describe('SlidingIconsComponent', () => {
  let component: SlidingIconsComponent;
  let fixture: ComponentFixture<SlidingIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingIconsComponent]
    });
    fixture = TestBed.createComponent(SlidingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
