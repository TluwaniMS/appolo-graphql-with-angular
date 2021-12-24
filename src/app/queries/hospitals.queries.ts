import { gql } from 'apollo-angular';

export const getHospitalsQuery = gql`
  query getAllHospitals {
    hospitalName
    hospitalKey
    municipality
    doctors {
      id
      firstName
      lastName
      gender
      email
      hospital
    }
  }
`;

export const getHospitalByIdQuery = gql`
  query GetHospitalById($hospitalKey: String!) {
    getHospitalByHospitalKey(hospitalKey: $hospitalKey) {
      hospitalName
      hospitalKey
      municipality
      doctors {
        id
        firstName
        lastName
        gender
        email
        hospital
      }
    }
  }
`;
