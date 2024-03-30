import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingeMakerComponent } from './binge-maker.component';

describe('BingeMakerComponent', () => {
  let component: BingeMakerComponent;
  let fixture: ComponentFixture<BingeMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingeMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingeMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
