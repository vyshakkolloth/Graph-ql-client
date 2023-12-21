import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../Mutation/projectMutation';
import { GET_PROJECT } from '../queries/projectQueries';



import React from 'react'

const DeleteProject = ({ projectId }) => {
    const navigate = useNavigate();

    const [deleteProject,{loading, error, data}] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECT }],
      });
      
      if(error)return( <>error</>)
    


  return (
    <div className='d-flex mt-5 ms-auto'>
    <button className='btn btn-danger m-2' onClick={deleteProject}>
      <FaTrash className='icon' /> Delete Project
    </button>
  </div>
  )
}

export default DeleteProject