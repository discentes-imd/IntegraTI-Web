import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFormComponent } from './jobs-form.component';

describe('JobsFormComponent', () => {
  let component: JobsFormComponent;
  let fixture: ComponentFixture<JobsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
