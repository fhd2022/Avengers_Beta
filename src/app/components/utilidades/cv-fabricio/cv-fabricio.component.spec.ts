import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFabricioComponent } from './cv-fabricio.component';

describe('CvFabricioComponent', () => {
  let component: CvFabricioComponent;
  let fixture: ComponentFixture<CvFabricioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvFabricioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvFabricioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
