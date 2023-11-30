import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUlComponent } from './nav-ul.component';

describe('NavUlComponent', () => {
  let component: NavUlComponent;
  let fixture: ComponentFixture<NavUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavUlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
