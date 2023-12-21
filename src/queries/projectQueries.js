import { gql } from "@apollo/client";

const GET_PROJECT = gql`
  query getProject {
    eprojects {
      id
      name
      description
      status
      clientId {
        id
        name
        email
        phone
      }
    }
  }
`;
const SINGLE_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status

      clientId {
        id
        name
        phone
        email
      }
    }
  }
`;

export { GET_PROJECT, SINGLE_PROJECT };
