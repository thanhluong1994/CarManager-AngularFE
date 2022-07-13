import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCarComponent } from './car/list-car/list-car.component';
import { CreateCarComponent } from './car/create-car/create-car.component';
import { EditCarComponent } from './car/edit-car/edit-car.component';
import { DeleteCarComponent } from './car/delete-car/delete-car.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MaxCarComponent } from './car/max-car/max-car.component';
@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    CreateCarComponent,
    EditCarComponent,
    DeleteCarComponent,
    MaxCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
