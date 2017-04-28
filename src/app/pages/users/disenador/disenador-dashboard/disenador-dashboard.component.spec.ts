import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenadorDashboardComponent } from './disenador-dashboard.component';

describe('DisenadorDashboardComponent', () => {
  let component: DisenadorDashboardComponent;
  let fixture: ComponentFixture<DisenadorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenadorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenadorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
