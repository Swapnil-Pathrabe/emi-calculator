import React from 'react'

const TextInput = ({title, state, setState }) => {
  return (
    <>
     <span className='title'>{title}</span>
     <input type="number" value={state} placeholder={title} onChange={(e) => setState(e.target.value)}/>
    </>
  )
}

export default TextInput