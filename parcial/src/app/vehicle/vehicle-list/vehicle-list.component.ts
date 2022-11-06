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
    total_nissan?: number;
    total_chevrolet?: number;
    total_renault?: number;

  getVehicles(): void{
    this.vehicleService.getVehicles().subscribe((vehicles)=> {
      this.vehicles = vehicles;
      this.total_nissan = this.countMarca('Nissan');
      this.total_chevrolet = this.countMarca('Chevrolet');
      this.total_renault = this.countMarca('Renault');
    })

  }

  countMarca(type: string): number{
    let total = 0;
    for (var vehicle of this.vehicles) {
      if(vehicle.marca===type)
      {
        total++;
      }
    }
    return total
  }

  ngOnInit() {
    this.getVehicles();
  }

}