import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVideoViewerComponent } from './show-video-viewer.component';

describe('ShowVideoViewerComponent', () => {
  let component: ShowVideoViewerComponent;
  let fixture: ComponentFixture<ShowVideoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVideoViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVideoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
