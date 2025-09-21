import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export const Home = () => {
    const {number} = useContext(AppContext)
    return (
        <div className='container mt-5'>
            <div className="text-center">
                <h1 className="display-4 text-primary mb-4">Home</h1>
                <div className="alert alert-info">
                    <h3>Number from counter: {number}</h3>
                </div>
            </div>
        </div>
    )
}
