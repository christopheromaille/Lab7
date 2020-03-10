import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusterPage } from './muster.page';

describe('MusterPage', () => {
  let component: MusterPage;
  let fixture: ComponentFixture<MusterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
