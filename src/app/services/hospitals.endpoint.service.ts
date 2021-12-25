import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable()
export class HospitalsEndPointService {
  getAllHospitals(): Observable<any> {}

  getHospitalById(hospitalKey: string): Observable<any> {}

  deleteHospitalById(hospitalKey: string): Observable<any> {}
}
