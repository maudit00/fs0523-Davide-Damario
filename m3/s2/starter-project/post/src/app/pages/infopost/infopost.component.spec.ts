import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopostComponent } from './infopost.component';

describe('InfopostComponent', () => {
  let component: InfopostComponent;
  let fixture: ComponentFixture<InfopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfopostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
