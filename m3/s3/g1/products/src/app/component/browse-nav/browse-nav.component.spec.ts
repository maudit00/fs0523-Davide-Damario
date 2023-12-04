import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseNavComponent } from './browse-nav.component';

describe('BrowseNavComponent', () => {
  let component: BrowseNavComponent;
  let fixture: ComponentFixture<BrowseNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
