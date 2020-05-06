import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorindComponent } from './norind.component';

describe('NorindComponent', () => {
  let component: NorindComponent;
  let fixture: ComponentFixture<NorindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
