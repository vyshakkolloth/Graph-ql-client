import { gql } from "@apollo/client";


const DELETE_CLINT=gql`
mutation deleteClient($id: ID!){
    deleteCLient(id:$id){
    id name email phone
    }   
}
`
const ADD_CLIENT=gql`
mutation addCLient($name:String!,$email:String!,$phone:String!) {
    addCLient(name:$name,email:$email,phone:$phone){
        id
        name
        email
        phone
    }
    }
`


export{ DELETE_CLINT,ADD_CLIENT}