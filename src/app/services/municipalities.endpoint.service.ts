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
  getAllMunicipalities(): Observable<any> {}

  getMunicipalityById(municipalityKey: string): Observable<any> {}

  deleteMunicipalityById(municipalityKey: string): Observable<any> {}
}
