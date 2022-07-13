import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarService} from '../../service/car/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Producer} from '../../model/producer';
import {ProducerService} from '../../service/producer/producer.service';
import {Car} from '../../model/car';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  producers: Producer[] = [];
  car: Car = {};
carForm: FormGroup = new FormGroup({
  id: new FormControl(),
  name: new FormControl(),
  price: new FormControl(),
  producer: new FormControl()
});
id: number;
  constructor(private carService: CarService,
              private producerService: ProducerService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
      this.getCarById(this.id);
    });
  }

  ngOnInit() {
    return this.getAllProducer();
  }

  getAllProducer() {
    return this.producerService.getAll().subscribe((producers) => {
      this.producers = producers;
    });
  }

  getCarById(id) {
    this.carService.findById(id).subscribe((car) => {
      this.carForm = new FormGroup({
        id: new FormControl(car.id),
        name: new FormControl(car.name),
        price: new FormControl(car.price),
        producer: new FormControl(car.producer.id)
      });
    });
  }

  edit() {
    const data = this.carForm.value;
    const producerId = data.producer;
    data.producer = {
      id: producerId
    };
    this.carService.update(this.id, this.carForm.value).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
