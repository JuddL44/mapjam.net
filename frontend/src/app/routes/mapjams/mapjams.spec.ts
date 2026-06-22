import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapjams } from './mapjams';

describe('Mapjams', () => {
  let component: Mapjams;
  let fixture: ComponentFixture<Mapjams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mapjams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mapjams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
