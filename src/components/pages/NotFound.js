import React from 'react';
import { NavLink } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ position: 'fixed', top: '0', height: '100vh', width: '100vw', backgroundColor: '#d9d9d9' }}>
        <h1 className='text-center text-dark'>404 Page Not Found</h1>
        <h5 className='text-dark'>Sorry, this page is'nt exist.</h5>
        <NavLink exact to='/'>Go Back</NavLink>
      </div>

    </>
  )


}

export default NotFound
