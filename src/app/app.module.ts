import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DoctorsEndPointService } from 'src/app/services/doctors.endpoint-service';
import { HospitalsEndPointService } from 'src/app/services/hospitals.endpoint.service';
import { MunicipalitiesEndPointService } from 'src/app/services/municipalities.endpoint.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [
    DoctorsEndPointService,
    HospitalsEndPointService,
    MunicipalitiesEndPointService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
