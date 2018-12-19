import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueMatchComponent } from './venue-match.component';

describe('VenueMatchComponent', () => {
  let component: VenueMatchComponent;
  let fixture: ComponentFixture<VenueMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
