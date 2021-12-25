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
  constructor(private apollo: Apollo) {}

  getAllHospitals(): Observable<any> {
    return this.apollo.watchQuery({
      query: getHospitalsQuery,
    }).valueChanges;
  }

  getHospitalById(hospitalKey: string): Observable<any> {
    return this.apollo.watchQuery({
      query: getHospitalByIdQuery,
      variables: {
        hospitalKey: hospitalKey,
      },
    }).valueChanges;
  }

  deleteHospitalById(hospitalKey: string): Observable<any> {
    return this.apollo.mutate({
      mutation: deleteHospital,
      variables: {
        hospitalKey: hospitalKey,
      },
    });
  }
}
