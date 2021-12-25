import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable()
export class DoctorsEndPointService {
  getAllDoctors(): Observable<any> {}

  getDoctorById(doctorsId: number): Observable<any> {}

  deleteDoctorById(doctorsId: number): Observable<any> {}
}
