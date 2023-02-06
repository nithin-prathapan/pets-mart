import React from 'react'
import { useRef } from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { MdPets } from 'react-icons/md'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const petNameRef = useRef('')
    const handleSearchSubmit = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const petName = petNameRef.current.value
        if (location === "" || distance === "" || petName === "")
            return alert('All Fields are required!')
    }
    return (
        <div className='drop-shadow-lg  w-[full] sm:p-12 p-4 md:p-12 mt-12 rounded-[100px] grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-y-8  shadow-md'>
            <div className='flex my-auto'>
                <span className='my-auto mr-2 ml-1'><BiCurrentLocation color='#ff00dd' size={25} /></span>
                <div>
                    <h1>Your location</h1>
                    <input type="text" placeholder='Your Location' className=' outline-none bg-[#fee0]' ref={locationRef} />
                </div>
            </div>
            <div className='border-l flex border-l-[#0000006c]'>
                <span className='my-auto mr-2 ml-1'><MdOutlineTravelExplore color='#ff00dd' size={25} /></span>
                <div className='my-auto'>
                    <h1>Distannce in Km</h1>
                    <input type="text" placeholder='Distance from your location' className=' outline-none bg-[#fee0]' ref={distanceRef} />
                </div>
            </div>
            <div className='flex border-l border-l-[#0000006c]'>
                <span className='my-auto mr-2  ml-1'><MdPets color='#ff00dd' size={25} /></span>
                <div>
                    <h1>Enter Pet Name</h1>
                    <input type="text" placeholder='Pet you looking for...' className=' outline-none bg-[#fee0]' ref={petNameRef} />
                </div>
                <div className=' bg-button-primary p-2 h-[100%] my-auto rounded-md items-center  justify-center '>
                    <BsSearch onClick={handleSearchSubmit} type='submit' size={25} color='#000' className='hover:scale-105' />
                </div>
            </div>
        </div>
    )
}

export default SearchBar