import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';

import { DashboardComponent } from './dashboard.component';

import { MockComponent } from "ng-mocks"

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent,
        //mocking the child components
        MockComponent(FooterComponent), MockComponent(HeaderComponent)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);//creating a component
    component = fixture.componentInstance;//creating an instance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
