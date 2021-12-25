import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  getHospitalByIdQuery,
  getHospitalsQuery,
} from 'src/app/queries/hospitals.queries';
import { deleteHospital } from 'src/app/mutations/hospitals.mutations';

@Injectable()
export class HospitalsEndPointService {
  getAllHospitals(): Observable<any> {}

  getHospitalById(hospitalKey: string): Observable<any> {}

  deleteHospitalById(hospitalKey: string): Observable<any> {}
}
