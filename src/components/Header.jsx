import { AiOutlineMenu } from "react-icons/ai";
import React from 'react'
import { SiAircanada } from 'react-icons/si'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='w-full flex justify-between px-[4vw]'>
            <div className='flex items-center gap-[.2vw]'>
                <span className="text-[3vw] max-md:text-[6vw] max-sm:text-[7vw] text-orange-600"><SiAircanada /></span>
                <span className="text-[3vw] max-md:text-[6vw] max-sm:text-[7vw] font-bold  font-Itim">Tourvisto</span>
            </div>
            <div className='flex items-center gap-[1vw]'>
                <nav className='max-md:hidden'>
                    <Navbar />
                </nav>
            </div>
        </div>
    )
}

export default Header
