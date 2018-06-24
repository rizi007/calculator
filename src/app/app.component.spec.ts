import { TestBed, async , ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [BrowserModule,FormsModule]
    }).compileComponents().then(()=> {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
      comp.num1 = 10;
      comp.num2 = 2;
    });
    
  }));
  it('should add numbers', async(() => {
    comp.operator = '+';
    comp.calculate();
    expect(comp.answer).toEqual(12);
  }));
  it('should multiple numbers', async(() => {
    comp.operator = '*';
    comp.calculate();
    expect(comp.answer).toEqual(20);
  }));
  it('should divide numbers', async(() => {
    comp.operator = '/';
    comp.calculate();
    expect(comp.answer).toEqual(5);
  }));
  it('should subtract numbers', async(() => {
    comp.operator = '-';
    comp.calculate();
    expect(comp.answer).toEqual(8);
  }));

});
