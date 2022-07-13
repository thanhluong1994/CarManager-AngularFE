import { Component, OnInit } from '@angular/core';
import {Car} from '../../model/car';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../service/car/car.service';
import {Router} from '@angular/router';
import {Producer} from '../../model/producer';
import {ProducerService} from '../../service/producer/producer.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
car: Car = {};
producers: Producer[] = [];
carForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  price: new FormControl(),
  producer: new FormControl()
});
  constructor(private carService: CarService,
              private productService: ProducerService,
              private router: Router) { }

  ngOnInit() {
    this.getAllProducer();
  }
  getAllProducer() {
    this.productService.getAll().subscribe((producers) => {
      this.producers = producers;
    });
  }

  get nameControl() {
    return this.carForm.get('name');
  }
  createCar() {
    const data = this.carForm.value;
    const producerId = data.producer;
    data.producer = {
      id: producerId
    };
    this.carService.create(data).subscribe(() => {
      this.carForm.reset();
      this.router.navigateByUrl('/');
    });
  }
}
