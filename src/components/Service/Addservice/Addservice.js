import React, { useState } from 'react';
import Sidebaradmin from '../Sidebaradmin/Sidebaradmin';

const Addservice = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title)
        formData.append('description', info.description)

        fetch('https://young-bastion-60344.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <Sidebaradmin></Sidebaradmin>
            <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
        <form onSubmit={handleSubmit}>
            <div className="row">
                    <div className="col-md-6">
                        <input onBlur={handleBlur} name='title' className='form-control' placeholder='Enter Title' type="text" required />
                        <textarea  onBlur={handleBlur} name='description' className="form-control mt-3" placeholder="Enter Description" rows="4" required></textarea>
                    </div>
                    <div className="col-md-6">
                        <input onChange={handleFileChange} className='form-control' type="file" required/>
                    </div>
                    <input type='submit' value='Add New Service' className='ml-3 btn btn-outline-dark mt-3' />
            </div>
        </form>
        </div>
        </section>
    );
};

export default Addservice;