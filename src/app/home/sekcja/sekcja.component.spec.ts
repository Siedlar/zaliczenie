import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaComponent } from './sekcja.component';

describe('SekcjaComponent', () => {
  let component: SekcjaComponent;
  let fixture: ComponentFixture<SekcjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
