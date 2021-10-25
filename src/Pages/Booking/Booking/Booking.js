import React, { useEffect }  from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';

const Booking = () => {
    const {serviceId} = useParams();
    const [service,setService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div>
            <h2>Detail of: {service.firstName}</h2>
            <h2>this is booking :{serviceId}</h2>
        </div>
    );
};

export default Booking;