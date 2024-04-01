import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingeWatcherComponent } from './binge-watcher.component';

describe('BingeWatcherComponent', () => {
  let component: BingeWatcherComponent;
  let fixture: ComponentFixture<BingeWatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingeWatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingeWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
