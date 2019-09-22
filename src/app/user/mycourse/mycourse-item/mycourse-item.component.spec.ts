import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycourseItemComponent } from './mycourse-item.component';

describe('MycourseItemComponent', () => {
  let component: MycourseItemComponent;
  let fixture: ComponentFixture<MycourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
