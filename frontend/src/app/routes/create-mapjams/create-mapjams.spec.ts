import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMapjams } from './create-mapjams';

describe('CreateMapjams', () => {
  let component: CreateMapjams;
  let fixture: ComponentFixture<CreateMapjams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMapjams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMapjams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
