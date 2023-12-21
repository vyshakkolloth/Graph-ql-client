import { gql } from "@apollo/client";
// import { QueryManager } from "@apollo/client/core/QueryManager";


const DELETE_PROJECT=gql`
mutation deleteProjrect($id: ID!){
    deleteProject(id:$id){
    id 
    }   
}
`
const ADD_PROJECT=gql`
mutation addProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!) {
  addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
    id
    name
    description
    status
    
  }
}
  `
  const UPDATE_PROJECT=gql`mutation updatePRoject($id: ID!, $name: String, $description: String, $status: ProjectStatusUpdate!) {
    updatePRoject(id: $id, name: $name, description: $description, status: $status) {
      id
      name
      description
      status
    
    }
  }
  `

export{ADD_PROJECT,UPDATE_PROJECT , DELETE_PROJECT}