import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SindianComponent } from './sindian.component';

describe('SindianComponent', () => {
  let component: SindianComponent;
  let fixture: ComponentFixture<SindianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SindianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SindianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
