import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { GoArrowRight } from "react-icons/go";
import React from 'react'
import { useInView } from "react-intersection-observer";

const Footer = () => {

    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div ref={ref3} className={`${inView3 ? "opacity-100" : "opacity-0"} transition-all duration-1000 relative py-[4vw] bg-primaryBlack text-white`}>
            <div className='w-[85vw] mx-auto grid  grid-cols-3 max-md:grid-cols-2 gap-[1vw] max-md:gap-[3vw]'>
                <div className='grid gap-[1vw] '>
                    <h1 className="font-semibold text-[1.5vw] max-md:text-[4vw]">Company</h1>
                    <div className='flex flex-col gap-[.5vw] max-md:text-[3vw]'>
                        <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'><GoArrowRight className="text-bold" />About Us</span>
                        <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'><GoArrowRight className="text-bold" />Contact Us</span>
                        <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'><GoArrowRight className="text-bold" />Privacy Policy</span>
                        <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'><GoArrowRight className="text-bold" />Term & Condition</span>
                        <span className='hover:scale-95 duration-200 flex items-center gap-[.3vw] w-max'><GoArrowRight className="text-bold" />FAQ & Help</span>
                    </div>
                </div>
                <div className='grid gap-[1vw]'>
                    <div>
                        <h1 className="font-semibold text-[1.5vw]  max-md:text-[4vw]">Contact</h1>
                    </div>
                    <div className="flex flex-col gap-[.5vw]  max-md:gap-[2vw] max-md:text-[3vw]">
                        <span className='hover:text-gray-300 flex items-center gap-[.3vw]'><ImLocation2 className="text-bold" />123 Street, New York, USA</span>
                        <span className='hover:text-gray-300 flex items-center gap-[.3vw]'><AiFillPhone className="text-bold" />+012 345 67890</span>
                        <span className='hover:text-gray-300 flex items-center gap-[.3vw]'><MdEmail className="text-bold" />info@example.com</span>
                        <div className="flex gap-[.5vw] max-md:gap-[2vw]">
                            <button className="p-[.5vw] max-md:p-[1vw] hover:scale-110 duration-300 hover:bg-red-600 rounded-full border-[.1vw]"><AiOutlineInstagram className="text-[1.3vw]  max-md:text-[5vw]" /></button>
                            <button className="p-[.5vw] max-md:p-[1vw] hover:scale-110 duration-300 hover:bg-blue-600 rounded-full border-[.1vw]"><FaTelegramPlane className="text-[1.3vw]  max-md:text-[5vw]" /></button>
                            <button className="p-[.5vw] max-md:p-[1vw] hover:scale-110 duration-300 hover:bg-blue-700 rounded-full border-[.1vw]"><AiOutlineTwitter className="text-[1.3vw]  max-md:text-[5vw]" /></button>
                        </div>
                    </div>
                </div>
                <div className='grid gap-[1vw] max-md:w-[85vw]'>
                    <h1 className="font-semibold text-[1.5vw]  max-md:text-[4vw]">Newsletter</h1>
                    <div className="flex flex-col gap-[1vw] max-md:gap-[2vw]">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ab quibusdam vitae</span>
                        <div>
                            <input className="outline-none text-black px-[.5vw] max-md:px-[1vw] py-[.8vw] max-md:py-[2vw] rounded w-[20vw] max-md:w-[50vw]" type="text" placeholder="example@email.com" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
