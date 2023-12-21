import React from "react";
import {  useQuery,useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import Spinner from "./spinner";
import { get_CLients } from "../queries/clientsQueries";
import { DELETE_CLINT } from "../Mutation/clientMutation";
import AddClintModal from "./AddClintModal";
import ProjectDisplay from "./ProjectDisplay";
import AddProjectModal from "./AddProjectModal";
import { ErrorBoundary } from "react-error-boundary";



const Client = () => {
  

  const { loading, error, data } = useQuery(get_CLients);

  const [deleteClint] = useMutation(DELETE_CLINT);


  const deleteCLienta=(id)=>{
   
   try {
     deleteClint({
        variables: { id },
        refetchQueries: [{ query: get_CLients }], // You may need to refetch the data after deletion
      });
   } catch (error) {
    console.log("first", error)
   }
    // console.log(deleteClint())
    
  }
 

  if (loading) return <Spinner/>
  if (error) return <p>error ....</p>;
  // console.log(data.clients[0])

  return (
    <div>

      {!loading && !error && (<>
<ErrorBoundary fallback={<div className="text-red" >Under Minteaince</div>}>

<AddProjectModal className/>
</ErrorBoundary>
<AddClintModal/>


      <ProjectDisplay/>
        
        
        <table className=" table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {data?.clients.map((datas,index) => 
              <tr key={index}>
               
                {/* <tr>{datas.name}</tr> */}
                <td>{datas.name}4</td>
                <td>{datas?.email}</td>
                <td>{datas?.phone}</td>
                <td><button 
                onClick={()=>deleteCLienta(datas?.id)} 
                className="btn btn-danger"><FaTrash/></button></td>

               
              </tr>
            )}
          </tbody>
        </table></>
      )}
    </div>
  );
};

export default Client;
