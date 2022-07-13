import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarService} from '../../service/car/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Producer} from '../../model/producer';
import {ProducerService} from '../../service/producer/producer.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  producer: Producer[] = [];
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
      this.getCarId(this.id);
    });
  }

  ngOnInit() {
  }

  getCarId(id) {
    this.carService.findById(id).subscribe((car) => {
      this.carForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(car.name),
        price: new FormControl(car.price),
        producer: new FormControl(car.producer.name)
      });
    });
  }
  delete() {
    this.carService.delete(this.id).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
