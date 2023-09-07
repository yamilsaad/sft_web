import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmComponent } from './webm.component';

describe('WebmComponent', () => {
  let component: WebmComponent;
  let fixture: ComponentFixture<WebmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebmComponent]
    });
    fixture = TestBed.createComponent(WebmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
