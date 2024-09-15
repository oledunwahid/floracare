import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Logo from "../../assets/images/Logo.png";
import NavLinks from "./NavLinks";
import carouselImage1 from '../../assets/CAROUSEL1.jpg';
import carouselImage2 from '../../assets/CAROUSEL2.jpg';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState(false)

    window.addEventListener("scroll", function () {
        const search = document.querySelector(".navigation")
        search.classList.toggle("active", window.scrollY > 100)
    })

    return (
        <>
            <nav className="navigation bg-white text-black">
                <div className="flex items-center font-medium justify-around">
                    <div className="z-50 p-5 w-full flex justify-between md:w-auto">
                        <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
                        <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
                            <ion-icon name={`${open ? 'close' : 'menu' }`}></ion-icon>
                        </div>
                    </div>
                    <ul className="md:flex hidden uppercase items-center gap-8">
                        <NavLinks></NavLinks>
                    </ul>
                    <div className="md:block hidden">
                        <button className="bg-[#fa7676] hover:bg-[#e16a6a] text-white px-4 py-2 mr-2 rounded-full" onClick={()=>setSearch(!search)}>
                            <div className="text-2xl">
                                <ion-icon name="search"></ion-icon>
                            </div>
                        </button>        
                    </div>    
                </div>
            </nav> 

            <hr className="border-gray-300"/>

            {/* Search Bar */}
            <div className={`items-center bg-white md:px-3 lg:px-10 ${search ? 'md:block fixed w-full hidden' : 'hidden'}`}>
                <form>               
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 text-xl">
                        <ion-icon name="search"></ion-icon>
                    </div>

                    <input type="search" id="default-search" className="block w-full h-20 p-4 pl-10 text-sm text-gray-900 bg-gray-50 focus:outline-none" autoFocus="autofocus" placeholder="Search Flowers..." required />

                    <button type="submit" className="text-white flex items-center absolute inset-y-5 right-16 bg-[#fa7676] hover:bg-[#e16a6a] font-medium rounded-lg text-xs px-2 py-1 md:text-base md:px-4 md:py-2">Search</button>
                            
                    <button type="reset" className="text-black flex items-center absolute inset-y-5 right-5 rounded-xl text-2xl px-2 py-1 font-black" onClick={()=>setSearch(false)}>
                        <ion-icon name="close"></ion-icon>
                    </button>
                </form>
            </div>


            {/* Mobile nav */}
            <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-20 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                <li>
                    {/* Search Bar mobile */}
                    <div className={`items-center bg-white md:px-3 lg:px-10 ${search ? 'lg:block' : 'hidden'}`}>
                        <form>               
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 text-xl">
                                    <ion-icon name="search"></ion-icon>
                                </div>

                                <input type="search" id="default-search" className="block w-full h-20 p-4 pl-10 text-sm text-gray-900 bg-gray-50 focus:outline-none" autoFocus="autofocus" placeholder="Search Flowers..." required />

                                <button type="submit" className="text-white flex items-center absolute inset-y-5 right-16 bg-[#fa7676] hover:bg-[#e16a6a] font-medium rounded-lg text-xs px-2 py-1 md:text-base md:px-4 md:py-2">Search</button>
                                            
                                <button type="reset" className="text-black flex items-center absolute inset-y-5 right-5 rounded-xl text-2xl px-2 py-1 font-black" onClick={()=>setSearch(false)}>
                                    <ion-icon name="close"></ion-icon>
                                </button>
                            </div>
                        </form>
                    </div>
                </li>

                <NavLinks></NavLinks>

                {/* Button mobile */}
                <div className="flex mt-3">
                    <button className="bg-[#fa7676] hover:bg-[#e16a6a] text-white px-4 py-2 mr-2 rounded-full" onClick={()=>setSearch(!search)}>
                        <div className="text-2xl">
                            <ion-icon name="search"></ion-icon>
                        </div>
                    </button>     
                </div>
            </ul>

            <div className={`${open? 'hidden' : 'max-w-[1400px] lg:h-[100vh] w-full m-auto py-20 px-4'}`}>
                <Carousel
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    interval={2000}
                    showStatus={false}    
                >
                <div>
                    <img src={carouselImage1} alt="Flower 1" className='rounded-2xl' />
                </div>
                <div>
                    <img src={carouselImage2} alt="Flower 2" className='rounded-2xl' />
                </div>
                </Carousel>
            </div>
        </>
    )
}

export default Navbar;