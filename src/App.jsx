import { useState } from 'react'
import Header from './components/Header'
import { ApolloProvider, ApolloClient,InMemoryCache } from '@apollo/client'
import Client from './components/Client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
// import { ErrorBoundary } from "react-error-boundary";


function App() {
const client =new ApolloClient(
  {
    uri:"http://localhost:3000/graphql",
    cache: new InMemoryCache()
  }
)


  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        
    <Header/>
    <div className='container'>
    <Routes>
    {/* <ErrorBoundary fallback={<div className="text-red" >Under Minteaince</div>}> */}

     <Route path='/' element={<Client/>}/>
     <Route path="/projects/:id" element={<Projects/>}/>
     <Route path="*" element={<NotFound/>}/>
{/* </ErrorBoundary> */}
     
    
    </Routes>
    </div>
    </Router>
    </ApolloProvider>
    </>
  )
}

export default App
