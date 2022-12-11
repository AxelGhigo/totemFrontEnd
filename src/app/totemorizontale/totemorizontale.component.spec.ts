import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotemorizontaleComponent } from './totemorizontale.component';

describe('TotemorizontaleComponent', () => {
  let component: TotemorizontaleComponent;
  let fixture: ComponentFixture<TotemorizontaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotemorizontaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotemorizontaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
