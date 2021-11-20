import { ComponentFixture, TestBed } from '@angular/core/testing';


import { LayoutComponent } from './layout.component';

//Angular standard testing library
import { RouterTestingModule } from '@angular/router/testing';


describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LayoutComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);//create component
    component = fixture.componentInstance;
    fixture.detectChanges();//for detecting when things change
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Testing for imperative pieces of the page", () => {

    it('should make sure router-outlet is present', () => {

      //Arrage
      const emailInput = fixture.nativeElement.querySelector("router-outlet");

      //act

      //assert
      expect(emailInput).toBeTruthy();
    });

  })

});
