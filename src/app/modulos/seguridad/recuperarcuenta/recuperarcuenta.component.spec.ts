import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarcuentaComponent } from './recuperarcuenta.component';

describe('RecuperarcuentaComponent', () => {
  let component: RecuperarcuentaComponent;
  let fixture: ComponentFixture<RecuperarcuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarcuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
