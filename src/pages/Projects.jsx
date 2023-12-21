import React from 'react'
import { Link, useParams } from 'react-router-dom';

import { SINGLE_PROJECT } from '../queries/projectQueries'
import Spinner from '../components/spinner'
import { useQuery } from '@apollo/client'
import Cleintinfo from '../components/Cleintinfo';
import DeleteProject from '../components/DeleteProject';
import EditProject from '../components/EditProject';
import { ErrorBoundary } from "react-error-boundary";




const Projects = () => {
  const {id}=useParams()
  const { loading, error, data } = useQuery(SINGLE_PROJECT, { variables: { id } });
  if (loading) return <Spinner/>
  if (error) return <p>error ....</p>;
  console.log(data)
  return (
    <>
    {!loading && !error && (
     
      <div className='mx-auto w-75 card p-5'>
        <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
          Back
        </Link>

        <h1>{data.project?.name}</h1>
        <p>{data.project?.description}</p>

        <h5 className='mt-3'>Project Status</h5>
        <p className='lead'>{data.project.status}</p>

        <Cleintinfo client={data.project.clientId} />

        <ErrorBoundary fallback={<div className="text-red" >Under Minteaince</div>}> 
        <EditProject project={data.project} />

        <DeleteProject projectId={data.project.id} />
         </ErrorBoundary>
      </div>)
     
    
    }
    </>
  )
}

export default Projects