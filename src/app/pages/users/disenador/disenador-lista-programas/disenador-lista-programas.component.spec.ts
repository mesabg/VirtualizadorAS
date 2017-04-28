import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenadorListaProgramasComponent } from './disenador-lista-programas.component';

describe('DisenadorListaProgramasComponent', () => {
  let component: DisenadorListaProgramasComponent;
  let fixture: ComponentFixture<DisenadorListaProgramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenadorListaProgramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenadorListaProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
