import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComputationComponent } from './basic-computation.component';

describe('BasicComputationComponent', () => {
  let component: BasicComputationComponent;
  let fixture: ComponentFixture<BasicComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Add', () => {
    expect(component.add(1,2)).toBe(3);
  });
  it('should subtract', () => {
    expect(component.subtract(2,1)).toBe(1);
  });
  it('should multiply', () => {
    expect(component.multiply(2,3)).toBe(6);
  });
  it('should divide', () => {
    expect(component.divide(6,3)).toBe(2);
  });
});
