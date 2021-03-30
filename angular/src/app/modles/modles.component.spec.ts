import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlesComponent } from './modles.component';

describe('ModlesComponent', () => {
  let component: ModlesComponent;
  let fixture: ComponentFixture<ModlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
