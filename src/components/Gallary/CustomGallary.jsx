import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import gallery1 from '../../assets/images/gallery1.jpg'
import pet2 from '../../assets/images/pet2.jpg'
import pet4 from '../../assets/images/pet4.jpg'
import pet3 from '../../assets/images/pet3.jpg'

const CustomGallary = () => {
    return (
        <div className="p-4">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 400: 3, 760: 4, 900: 5 }}
            >
                <Masonry gutter='1rem'>
                    <img className='w-[100%] block rounded-lg ' src={pet2} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={gallery1} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={pet2} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={pet4} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={pet4} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={pet3} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={pet4} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={pet4} alt="image" />
                    <img className='w-[100%] block rounded-lg ' src={pet4} alt="image" />
                </Masonry>
            </ResponsiveMasonry>
        </div>





    )
}

export default CustomGallary