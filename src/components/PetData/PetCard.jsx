import React from 'react'
import { Link } from 'react-router-dom'
const PetCard = ({ pet }) => {

    return (
        <div className='w-[100%] ml-4 mr-4 mb-4  text-xs mx-auto p-3 shadow-lg drop-shadow-md cursor-pointer rounded-lg'>
            <Link to='/pet-details/111'>
                <div className="image shadow-lg mx-auto drop-shadow-md mb-4 w-[90%]">
                    <img className='w-[100%] mx-auto ' src={pet.photo} alt="" />
                </div>
                <div className='flex justify-between'>
                    <h1>Name</h1>
                    <p>{pet.name}</p>
                </div>
                <div className='flex justify-between'>
                    <h1>Category</h1>
                    <p className=''>{pet.species}</p>
                </div>
                <div className='flex justify-between'>
                    <h1>Fav Foods</h1>
                    <p>{pet.favFoods}</p>
                </div>
                <div className='flex justify-between border-b'>
                    <h1>Age</h1>
                    <p>2</p>
                </div>
                <div className="flex justify-between mt-1">
                    <h1 className='my-auto'>Price</h1>
                    <button className='btn bg-button-primary rounded-md text-xs font-bold text-[#fff] p-1'>Order Now</button>
                </div>
            </Link>
        </div >
    )
}

export default PetCard