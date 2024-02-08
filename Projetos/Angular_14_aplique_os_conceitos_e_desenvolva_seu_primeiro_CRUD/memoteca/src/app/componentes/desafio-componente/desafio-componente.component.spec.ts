import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioComponenteComponent } from './desafio-componente.component';

describe('DesafioComponenteComponent', () => {
  let component: DesafioComponenteComponent;
  let fixture: ComponentFixture<DesafioComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesafioComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
