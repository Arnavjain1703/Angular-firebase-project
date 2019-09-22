import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseItemComponent } from './user-course-item.component';

describe('UserCourseItemComponent', () => {
  let component: UserCourseItemComponent;
  let fixture: ComponentFixture<UserCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
