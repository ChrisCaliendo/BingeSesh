import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingeCardComponent } from './binge-card.component';

describe('BingeCardComponent', () => {
  let component: BingeCardComponent;
  let fixture: ComponentFixture<BingeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
