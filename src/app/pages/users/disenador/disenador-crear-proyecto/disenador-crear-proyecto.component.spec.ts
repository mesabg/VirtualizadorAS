import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenadorCrearProyectoComponent } from './disenador-crear-proyecto.component';

describe('DisenadorCrearProyectoComponent', () => {
  let component: DisenadorCrearProyectoComponent;
  let fixture: ComponentFixture<DisenadorCrearProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenadorCrearProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenadorCrearProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
