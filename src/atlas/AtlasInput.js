import React, { useRef } from 'react'

export function AtlasInput(props) {
  const inputRef = useRef();
  const onSearchClick = () => {
    props.doApi(inputRef.current.value)
  }
  return (
    <div className='card mb-4'>
      <div className='card-header bg-primary text-white'>
        <h5 className='mb-0'>Search Countries</h5>
      </div>
      <div className='card-body'>
        <div className='input-group'>
          <input 
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.doApi(inputRef.current.value)
              }
            }}
            ref={inputRef} 
            placeholder='Enter country name...' 
            type="text" 
            className='form-control' 
          />
          <button onClick={onSearchClick} className='btn btn-success'>Search</button>
        </div>
      </div>
    </div>
  )
}
