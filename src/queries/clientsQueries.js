import {gql} from "@apollo/client"



    const get_CLients = gql`
      query getClient {
        clients {
          id
          name
          phone
          email
        }
      }
    `;

    export{ get_CLients}