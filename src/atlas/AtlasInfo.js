import React from 'react'

export function AtlasInfo(props) {
  let item = props.item;
  return (
    <div className='text-center'>
      {item.area ?
      <div className='card'>
        <div className='card-body'>
          <img src={item.flags.png} alt={item.name.common} className='img-fluid mb-3' style={{maxWidth: '200px'}} />
          <h2 className='card-title text-primary'>{item.name.common}</h2>
          <div className='row mb-3'>
            <div className='col-md-6'>
              <div className='badge bg-info fs-6 mb-2'>Population: {item.population.toLocaleString()}</div>
            </div>
            <div className='col-md-6'>
              <div className='badge bg-secondary fs-6 mb-2'>Capital: {item.capital[0]}</div>
            </div>
          </div>
          {item.borders && item.borders.length > 0 && (
            <div>
              <h5 className='text-muted mb-3'>Neighboring Countries:</h5>
              <div className='d-flex flex-wrap justify-content-center gap-2'>
                {item.borders.map((val, i) => {
                  return (
                    <button 
                      key={i}
                      onClick={() => props.doApiCountryCode(val)} 
                      className='btn btn-outline-primary btn-sm'
                    >
                      {val}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      : 
      <div className='d-flex justify-content-center align-items-center' style={{minHeight: '200px'}}>
        <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      }
    </div>
  )
}