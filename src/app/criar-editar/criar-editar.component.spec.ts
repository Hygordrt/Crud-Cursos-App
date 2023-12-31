import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarComponent } from './criar-editar.component';

describe('CriarEditarComponent', () => {
  let component: CriarEditarComponent;
  let fixture: ComponentFixture<CriarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
