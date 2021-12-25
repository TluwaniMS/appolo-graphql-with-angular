import { gql } from 'apollo-angular';

export const deleteMunicipality = gql`
  mutation DeleteMunicipalityById($municipalityKey: String!) {
    deleteMunicipalityByMunicipalKey(
      deleteMunicipalityByMunicipalKey: $deleteMunicipalityByMunicipalKey
    )
  }
`;
