import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  getMunicipalitiesQuery,
  getMunicipalityByIdQuery,
} from 'src/app/queries/municipalities.queries';
import { deleteMunicipality } from 'src/app/mutations/municipalities.mutations';

@Injectable()
export class MunicipalitiesEndPointService {
  constructor(private apollo: Apollo) {}

  getAllMunicipalities(): Observable<any> {
    return this.apollo.watchQuery({
      query: getMunicipalitiesQuery,
    }).valueChanges;
  }

  getMunicipalityById(municipalityKey: string): Observable<any> {
    return this.apollo.watchQuery({
      query: getMunicipalityByIdQuery,
      variables: {
        municipalityKey: municipalityKey,
      },
    }).valueChanges;
  }

  deleteMunicipalityById(municipalityKey: string): Observable<any> {
    return this.apollo.mutate({
      mutation: deleteMunicipality,
      variables: {
        municipalityKey: municipalityKey,
      },
    });
  }
}
