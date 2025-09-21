import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export const Counter2 = () => {
  const { counter, setCounter } = useContext(AppContext)

  return (
    <div className='container text-center mt-5'>
      <div className="card">
        <div className="card-header bg-success text-white">
          <h1>Counter 2</h1>
        </div>
        <div className="card-body">
          <h3 className="mb-4">Current Count: {counter}</h3>
          <button 
            className="btn btn-success btn-lg"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
