import React, { useState } from 'react'
import Spinner from './spinner'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'




const ProjectDisplay = () => {
    const{loading,error,data}=useQuery(GET_PROJECT)
    // console.warn(error)

    if(loading) return<Spinner/>
    if (error) return <h1>eroro</h1>
    // console.log(data.eprojects[0])
  return (
    <>
   
   
    {
        data?.eprojects.length>0?(
            <div className='row mt-4'>
            {
                data?.eprojects.map((data,index)=> <div key={index} className='col-md-6'>
                <div className='card mb-3'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h5 className='card-title'>{data.name}</h5>
          
                      <a className='btn btn-light' href={`/projects/${data.id}`}>
                        View
                      </a>
                    </div>
                    <p className='small'>
                      Status: <strong>{data.status}</strong>
                    </p>
                  </div>
                </div>
              </div>)
            }
            </div>
        ):(null)
    }
     </>
  )
}

export default ProjectDisplay