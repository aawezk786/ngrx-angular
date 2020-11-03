import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLayoutComponent } from './youtube-layout.component';

describe('YoutubeLayoutComponent', () => {
  let component: YoutubeLayoutComponent;
  let fixture: ComponentFixture<YoutubeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
