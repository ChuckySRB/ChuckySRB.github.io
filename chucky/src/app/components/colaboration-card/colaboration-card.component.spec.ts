import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborationCardComponent } from './colaboration-card.component';

describe('ColaborationCardComponent', () => {
  let component: ColaborationCardComponent;
  let fixture: ComponentFixture<ColaborationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaborationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaborationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
