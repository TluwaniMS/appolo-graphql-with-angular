import { gql } from 'apollo-angular';

export const getMunicipalitiesQuery = gql`
  query getAllMunicipalities {
    municipalityName
    municipalityKey
    hospitals {
      hospitalName
      hospitalKey
    }
  }
`;

export const getMunicipalityByIdQuery = gql`
  query GetMunicipalityByMunicipalityKey($municipalityKey: String!) {
    getMunicipalityByMunicipalityKey(municipalityKey: $municipalityKey) {
      municipalityName
      municipalityKey
      hospitals {
        hospitalName
        hospitalKey
      }
    }
  }
`;
