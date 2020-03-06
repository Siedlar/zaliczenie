import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnetComponent } from './karnet.component';

describe('KarnetComponent', () => {
  let component: KarnetComponent;
  let fixture: ComponentFixture<KarnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
