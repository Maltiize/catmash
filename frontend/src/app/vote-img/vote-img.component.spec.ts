import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteImgComponent } from './vote-img.component';

describe('VoteImgComponent', () => {
  let component: VoteImgComponent;
  let fixture: ComponentFixture<VoteImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
