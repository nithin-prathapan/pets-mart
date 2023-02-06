import React from "react";
import homeCat from '.././assets/images/home-cat2.webp'
import homeFish from '.././assets/images/fish.jpg'
import homeDog from '.././assets/images/home-dog.jpg'
import SearchBar from "../components/Searchbar/SearchBar";
import Subtitle from "../components/Subtitle-home/Subtitle";
import ServiceList from "../components/Service/ServiceList";
import Petlist from "../components/PetData/PetList";
import ReviewCard from "../components/Reviews/ReviewCard";
import CustomGallary from "../components/Gallary/CustomGallary";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import NewsLetter from "../components/NewsLetter/NewsLetter";
const Home = () => {
  return (
    <div className="container sm:text-xs">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-12">
          <div className="sm:col-span-full col-span-6 md:col-span-6 grid grid-cols-1">
            <div className="my-auto">
              <Subtitle />
            </div>

          </div>
          {/* ======================Home Images======================== */}

          <div className="col-span-6 mt-4">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 400: 2, 760: 2, 900: 3 }}
            >
              <Masonry gutter='1rem'>
                <img className='hover:scale-95 duration-700 ease-out w-[100%] h-auto block rounded-lg ' src={homeCat} alt="image" />
                <img className='hover:scale-95 duration-700 ease-out w-[100%] h-auto block rounded-lg mt-8 ' src={homeFish} alt="image" />
                <img className='hover:scale-95 duration-700 ease-out w-[100%] h-auto block rounded-lg ' src={homeDog} alt="image" />
              </Masonry>
            </ResponsiveMasonry>
          </div>

          {/* ======================Home Images======================== */}
        </div>
        {/* =================Searchbar============= */}

          <div className="">
            <SearchBar />
          </div>
        {/* =================Searchbar============= */}
        {/* ===============SErvices================ */}
        <div className="grid grid-cols-12  mt-[50px] mb-[50px] md:block sm:block ">
          <div className="col-span-5  mt-4">
            <h1 className="w-[300px] font-fancy text-[30px] text-[#af2f2f]">What we Serve</h1>
            <p className="w-[300px] font-primary font-semibold text-3xl sm:text-sm  ">We offer Our Best <span className="text-button-primary">Services</span></p>

          </div>
          <div className="col-span-7 mx-auto my-auto ">
            <ServiceList />
          </div>
        </div >
        {/* ===============SErvices================ */}

        {/* ===============PET-LIST================== */}
        <div className="">
          <h1 className="font-semibold font-primary text-3xl sm:text-sm ">Here comes your<br /> <span className="text-button-primary">future friends</span></h1>
        </div>
        <div className="mt-4">
          <Petlist />
        </div>
        {/* ===============PET-LIST================== */}
        {/* ===============GALLARY================== */}
        <div className="customersGallery mt-[50px]">
          <div className="description">
            <h1 className="font-primary text-3xl sm:text-sm  font-semibold">
              View Our <span className="text-button-primary">Gallery</span>
            </h1>
          </div>
          <div className="gallery ">
            <div className="mx-auto">
              <CustomGallary />
            </div>
          </div>
        </div>
        {/* ===============GALLARY================== */}
        {/* ===============REVEIWS================== */}
        <div className=" mx-auto text-3xl sm:text-sm  font-primary font-semibold">
          <h1>See What Our <br /> <span className="text-button-primary">Customers</span> Talks <br /> About Us </h1>
        </div>
        <div className="">
          <div className="reviewCard sm:block">
            <ReviewCard />
          </div>
        </div>
        {/* ===============REVEIWS================== */}

      </div>
      <div className="w-full">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
