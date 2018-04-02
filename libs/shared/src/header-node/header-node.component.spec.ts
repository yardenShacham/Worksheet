import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNodeComponent } from './header-node.component';

describe('HeaderNodeComponent', () => {
  let component: HeaderNodeComponent;
  let fixture: ComponentFixture<HeaderNodeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderNodeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
