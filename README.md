# React GraphQL Apollo CRUD Sample Project

This is a sample project showcasing a client-side React application that utilizes GraphQL for communication with the backend server. The project follows a CRUD (Create, Read, Update, Delete) paradigm and uses Apollo Client for managing GraphQL operations.

## Features

- **GraphQL:** Utilizes GraphQL for efficient data fetching and management.
- **Apollo Client:** Integrates Apollo Client for managing state and handling GraphQL queries and mutations.
- **CRUD Operations:** Demonstrates basic CRUD operations with GraphQL, including creating, reading, updating, and deleting data.
- **React Components:** Organized React components for better modularity and maintainability.
- **Styling:** Basic styling using bootstrap.


### Prerequisites

- Node.js and yarn installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vyshakkolloth/Graph-ql-client.git
   cd your-repository

## Getting Started
>Install dependencies:
`yarn`



> Start the development server:
`yarn dev`

# Project Structure
**src/:** Contains the source code of the React application.
**components/:** React components used in the application.
**queries/:** GraphQL queries and mutations.
**pages/:** Top-level pages or views of the application.
**sdsds**:sdsd

## GraphQL Queries and Mutations
The GraphQL queries and mutations used in the project are located in the src/queries/ directory.
### Example Query
```json
   query getClient {
        clients {
          id
          name
          phone
          email
        }
      }
```
### Example Mutation
``` 
   mutation addCLient(
    $name:String!,
    $email:String!,
    $phone:String!
    ) {
    addCLient(name:$name,email:$email,phone:$phone){
        id
        name
        email
        phone
    }
    }
`
```