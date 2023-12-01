import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTaskComponent } from './loading-task.component';

describe('LoadingTaskComponent', () => {
  let component: LoadingTaskComponent;
  let fixture: ComponentFixture<LoadingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
