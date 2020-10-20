import React, { useEffect, useState } from 'react';

const Servicelist = () => {
    const [service, setService] = useState([])

useEffect(() => {
    const url = 'https://young-bastion-60344.herokuapp.com/allOrder'
    fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
}, [])
const handleChange =(id)=>{
    const status = document.getElementById('status').value
    fetch(`https://young-bastion-60344.herokuapp.com/updateStatus/${id}`,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({updatedStatus:status})
       })
       .then(res=> res.json())
       .then(data=>{
           alert('Status Updated')})
}
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <table className="table table-striped">
                <thead>
                    <tr className='row text-center'>
                        {/* <th className="col-md-3">Image</th> */}
                        <th className="col-md-2">Name</th>
                        <th className="col-md-2">Email</th>
                        <th className="col-md-3">Serivce</th>
                        <th className="col-md-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                {service.map(service=>
                    <tr key={service._id} className='row text-center'>
                        {/* <td className="col-md-2"><img height='30' src={`data:image/png;base64,${data.image.name}`} alt=""/></td> */}
                        <td className="col-md-2">{service.name}</td>
                        <td className="col-md-3">{service.email}</td>
                        <td className="col-md-3">{service.title}</td>
                        <td className="col-md-2">
                            <select onChange={()=>handleChange(service._id,)} id='status'className='form-control'>
                                <option defaultValue>{service.status}</option>
                                <option value="done">done</option>
                                <option value="pending">pending</option>
                            </select>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Servicelist;