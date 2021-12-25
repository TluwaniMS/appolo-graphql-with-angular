import { gql } from 'apollo-angular';

export const deleteHospital = gql`
  mutation DeleteHospitalById($hospitalKey: String!) {
    deleteHospitalById(hospitalKey: $hospitalKey)
  }
`;
