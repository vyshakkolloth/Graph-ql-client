import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import {FaUser} from"react-icons/fa"
import { ADD_CLIENT } from '../Mutation/clientMutation';
import { get_CLients } from '../queries/clientsQueries';


const AddClintModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
   const[addClient]= useMutation(ADD_CLIENT,{
    variables:{
        name,email,phone
    },
    refetchQueries: [{ query: get_CLients }], // You may need to refetch the data after deletion
      
   })

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (name === '' || email === '' || phone === '') {
          return alert('Please fill in all fields');
        }
    
        addClient(name, email, phone);
    
        setName('');
        setEmail('');
        setPhone('');
      };
    

  return (
    <>
   
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 <FaUser/> Add Client
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form 
      onSubmit={onSubmit}
      >
                <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Phone</label>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    </>
  )
}

export default AddClintModal