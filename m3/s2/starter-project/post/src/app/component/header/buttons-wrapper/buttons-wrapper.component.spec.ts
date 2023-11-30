import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsWrapperComponent } from './buttons-wrapper.component';

describe('ButtonsWrapperComponent', () => {
  let component: ButtonsWrapperComponent;
  let fixture: ComponentFixture<ButtonsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
