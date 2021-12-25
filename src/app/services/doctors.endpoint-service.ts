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
  constructor(private apollo: Apollo) {}

  getAllDoctors(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: getDoctorsQuery,
    }).valueChanges;
  }

  getDoctorById(doctorsId: number): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: getDoctorByIdQuery,
      variables: {
        doctorsId: doctorsId,
      },
    }).valueChanges;
  }

  deleteDoctorById(doctorsId: number): Observable<any> {
    return this.apollo.mutate({
      mutation: deleteDoctor,
      variables: {
        doctorsId: doctorsId,
      },
    });
  }
}
