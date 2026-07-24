import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveBannerComponent } from './wave-banner.component';

describe('WaveBannerComponent', () => {
  let component: WaveBannerComponent;
  let fixture: ComponentFixture<WaveBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaveBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
