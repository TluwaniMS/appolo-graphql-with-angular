import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  getDoctorByIdQuery,
  getDoctorsQuery,
} from 'src/app/queries/doctors.queries';
import { deleteDoctor } from 'src/app/mutations/doctors.mutations';

@Injectable()
export class DoctorsEndPointService {
  getAllDoctors(): Observable<any> {}

  getDoctorById(doctorsId: number): Observable<any> {}

  deleteDoctorById(doctorsId: number): Observable<any> {}
}
