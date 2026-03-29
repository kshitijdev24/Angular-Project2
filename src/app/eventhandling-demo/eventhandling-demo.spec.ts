import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventhandlingDemo } from './eventhandling-demo';

describe('EventhandlingDemo', () => {
  let component: EventhandlingDemo;
  let fixture: ComponentFixture<EventhandlingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventhandlingDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(EventhandlingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
