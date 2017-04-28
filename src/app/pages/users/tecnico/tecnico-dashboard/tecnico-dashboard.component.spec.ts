import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDashboardComponent } from './tecnico-dashboard.component';

describe('TecnicoDashboardComponent', () => {
  let component: TecnicoDashboardComponent;
  let fixture: ComponentFixture<TecnicoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
