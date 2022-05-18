import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function List() {

    const [properties, setProperties] = useState([])

    useEffect(()=>{
        fetchProperties() 
    },[])

    const fetchProperties = async () => {
        await axios.get(`https://tagsapp1122.herokuapp.com/api/properties`).then(({data})=>{
            setProperties(data)
        })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-dark mb-2 float-end' to={"/tag/list"}>
                    View Tags
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Rental</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    properties.length > 0 && (
                                        properties.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.id}</td>
                                                <td>{row.monthly_rental}</td>
                                                <td>{row.description}</td>
                                                <td>
                                                    <Link to={`/property/view/${row.id}`} className='btn btn-success me-2'>
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}