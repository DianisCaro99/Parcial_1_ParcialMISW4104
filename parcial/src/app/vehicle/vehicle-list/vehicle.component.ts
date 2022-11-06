import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private vehicleService: VehicleService,
    private router: ActivatedRoute, private routerPath: Router) { }

    vehicles: Array<Vehicle> = [];

  getVehicles(): void{
    this.vehicleService.getVehicles().subscribe((vehicles)=> {
      this.vehicles = vehicles;
    })
  }

  ngOnInit() {
    this.getVehicles();
  }

}