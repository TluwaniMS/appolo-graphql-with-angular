import { gql } from 'apollo-angular';

export const deleteDoctor = gql`
  mutation DeleteDoctorByDoctorId($doctorsId: Int!) {
    deleteDoctorById(doctorsId: $doctorsId)
  }
`;
