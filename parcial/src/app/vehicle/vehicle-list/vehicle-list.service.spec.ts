/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehicleListComponent } from './vehicle-list.component'
import { HttpClientModule } from '@angular/common/http';
import { Vehicle } from '../vehicle';
import { RouterModule } from '@angular/router';

describe('VehicleListComponent', () => {

  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const vehicles = new Vehicle(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
        );
        component.vehicles.push(vehicles);
      }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should have 1 <tr.table-dark> elements', () => {
  expect(debug.queryAll(By.css('tr.table-dark'))).toHaveSize(1)
});

it('should have 3 <tr.item> elements', () => {
  expect(debug.queryAll(By.css('tr.item'))).toHaveSize(3)
});

});