import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrouteComponent } from './searchroute.component';

describe('SearchrouteComponent', () => {
  let component: SearchrouteComponent;
  let fixture: ComponentFixture<SearchrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
