import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercartitemComponent } from './usercartitem.component';

describe('UsercartitemComponent', () => {
  let component: UsercartitemComponent;
  let fixture: ComponentFixture<UsercartitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercartitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
