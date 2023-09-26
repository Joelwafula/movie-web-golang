import React, { useEffect, useState } from 'react'

const Form = () => {
    const [setName, setFirstName] =useState('');
  return (
    <form autoComplete='off'>
        <div className='mb-3'>
        <label htmlFor='first-name'>First Name</label>
        <input input='text' name='first-name' id='first-name'
        onChange ={(e)=>setFirstName(e.target.value)}
        ></input>
      
    </div>
    <div>
        FirstName :{setName}
    </div>

    </form>
    
  )
}

export default Form
