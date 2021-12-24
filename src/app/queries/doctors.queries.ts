import { gql } from 'apollo-angular';

export const getDoctorsQuery = gql`
  query getAllDoctors {
    id
    firstName
    lastName
    gender
    email
    hospital
    info {
      specialty
      hospital
    }
  }
`;

export const getDoctorByIdQuery = gql`
  query GetDoctorById($doctorsId: String!) {
    getDoctorById(doctorsId: $doctorsId) {
      id
      firstName
      lastName
      gender
      email
      hospital
      info {
        specialty
        hospital
      }
    }
  }
`;
