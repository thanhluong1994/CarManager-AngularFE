import { Component, OnInit } from '@angular/core';
import {Car} from '../../model/car';
import {CarService} from '../../service/car/car.service';
import {Producer} from '../../model/producer';
import {ProducerService} from '../../service/producer/producer.service';

@Component({
  selector: 'app-max-car',
  templateUrl: './max-car.component.html',
  styleUrls: ['./max-car.component.css']
})
export class MaxCarComponent implements OnInit {
cars: Car[] = [];
producers: Producer[] = [];
  constructor(private carService: CarService,
              private producerService: ProducerService) { }

  ngOnInit() {
    this.searchMax();
    this.allProducer();
  }
  searchMax() {
    this.carService.search().subscribe((data) => {
      this.cars = data;
    }, (error) => {
    });
  }

  allProducer() {
    this.producerService.getAll().subscribe((data) => {
      this.producers = data;
    }, (error) => {
    });
  }
}
