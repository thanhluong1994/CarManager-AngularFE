import { Component, OnInit } from '@angular/core';
import {Car} from '../../model/car';
import {CarService} from '../../service/car/car.service';


@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  cars: Car [] = [];
  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getAllCar();
  }

  getAllCar() {
    this.carService.getAll().subscribe((data) => {
      this.cars = data;
    }, (error) => {
    });
  }
}

