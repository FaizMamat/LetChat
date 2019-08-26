import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdosComponent } from './chatdos.component';

describe('ChatdosComponent', () => {
  let component: ChatdosComponent;
  let fixture: ComponentFixture<ChatdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
