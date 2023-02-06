import React from 'react'
import ServiceCard from './ServiceCard'
import call from '../../assets/images/call.png'
import delivery from '../../assets/images/delivery.png'
const serviceData = [
    {
        service: 'Delivery',
        desc: 'Delivery the pet within 5 days',
        image: delivery
    },
    {
        service: 'Video of the pet',
        desc: 'Delivery the pet within 5 days',
        image: call
    },
    {
        service: 'Delivery',
        desc: 'Delivery the pet within 5 days',
        image: call
    },
]
const ServiceList = () => {
    return (
        <div className='grid grid-cols-3 '>
            {
                serviceData.map((item, index) => (
                    <ServiceCard item={item} key={index} />
                ))
            }
        </div>
    )
}

export default ServiceList