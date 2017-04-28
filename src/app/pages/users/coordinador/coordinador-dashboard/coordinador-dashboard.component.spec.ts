import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorDashboardComponent } from './coordinador-dashboard.component';

describe('CoordinadorDashboardComponent', () => {
  let component: CoordinadorDashboardComponent;
  let fixture: ComponentFixture<CoordinadorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
