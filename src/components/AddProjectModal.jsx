import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../Mutation/projectMutation";
import { GET_PROJECT } from "../queries/projectQueries";
import { get_CLients } from "../queries/clientsQueries";

const AddProjectModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("done");

  const [ addProject,
    { loading: mutationLoading, error: mutationError, data: didid },
  ] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      clientId,
      status,
    },onError(err){
        console.log(err)
    },
    refetchQueries: [{ query: GET_PROJECT }],
    // errorPolicy: "all",
  });
  if (mutationLoading) console.log(mutationLoading, "loading=---");
  if (mutationError) console.log(mutationError, "mutation error");
  if (didid) {
    console.warn(didid);
  }

  // get client
  const { loading, error, data } = useQuery(get_CLients);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name,description,status,clientId)
    if (name === "" || description === "" || status === "",clientId==="") {
      return alert("Please fill in all fields");
    }

    // try {
      await addProject(name, description, clientId, status);
    
    // } catch (error) {
      // console.error("Mutation error:", error);

    //   if (error.graphQLErrors) {
    //     const gqlErrors = error.graphQLErrors.map(
    //       (gqlError) => gqlError.message
    //     );
    //     alert(`GraphQL Error(s): ${gqlErrors.join(", ")}`);
    //   }

    //   if (error.networkError) {
    //     alert(`Network Error: ${error.networkError.message}`);
    //   }
    // }

    setName("");
    setDescription("");
    setStatus("done");
    setClientId("");
  };

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModal"
          >
            <div className="d-flex align-items-center">
              <FaList className="icon" />
              <div>New Project</div>
            </div>
          </button>

          <div
            className="modal fade"
            id="addProjectModal"
            aria-labelledby="addProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addProjectModalLabel">
                    New Project
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        id="status"
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="done">Done</option>
                        <option value="progress">In Progress</option>
                        {/* <option value='completed'>Completed</option> */}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        id="clientId"
                        className="form-select"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value="">Select Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddProjectModal;
