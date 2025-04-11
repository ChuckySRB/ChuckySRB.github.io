import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckitComponent } from './buckit.component';

describe('BuckitComponent', () => {
  let component: BuckitComponent;
  let fixture: ComponentFixture<BuckitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuckitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuckitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
