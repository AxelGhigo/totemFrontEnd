import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelloneComponent } from './tabellone.component';

describe('TabelloneComponent', () => {
  let component: TabelloneComponent;
  let fixture: ComponentFixture<TabelloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
