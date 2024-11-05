import { ImLocation2 } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Cards = ({ img, location, star, description, price, slug }) => {
    const page = useLocation()
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });



    return (
        <div ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[5vw]"} transition-all duration-1000 relative flex flex-col h-full justify-between border-[.1vw] shadow-md rounded-[1vw]`}>
            <div>
                <img className='w-full rounded-t-[1vw] h-[30vw] max-md:h-[70vw] object-cover object-center' src={img} alt="" />
            </div>
            <div className='border-[.1vw] py-[.4vw] flex justify-center'>
                <span className={`text-[1.5vw] max-md:text-[5vw] flex-1  text-center flex items-center gap-[.4vw] justify-center `}><ImLocation2 className="text-[1.5vw] max-md:text-[4vw]" />{location}</span>
                <span className={`${page.pathname == '/packages' ? "flex" : "hidden"} flex-1 text-center items-center gap-[.4vw] justify-center text-[1.5vw] max-md:text-[5vw]`}><AiFillStar className="text-primaryOrange text-[1.5vw] max-md:text-[5vw]" />{star}</span>
            </div>
            <div className="px-[1vw] h-full text-center py-[1vw] flex flex-col gap-[1vw]">
                <span className={`${page.pathname == '/packages' ? "flex" : "hidden"} max-md:text-[5vw] flex justify-center text-[2vw] font-semibold`}>${price}</span>
                <span className="h-full text-[1.5vw] max-md:text-[6vw] text-primaryGray">{description}</span>
            </div>
            <div className={`py-[1vw] max-md:py-[2vw] flex justify-end max-md:px-[5vw] px-[1vw]`}>
                <Link to={`/destination/${slug}`} className={` ${page.pathname == '/destinations' ? "static" : "hidden"} border-[.1vw] px-[2vw] text-white bg-primaryOrange hover:bg-primaryOrangeHover py-[1vw] max-md:text-[3vw] rounded-full font-semibold active:scale-95`}>Read More</Link>
                <Link to={`/packages/${slug}`} className={` ${page.pathname == '/packages' ? "static" : "hidden"} border-[.1vw] px-[2vw] text-white bg-primaryOrange hover:bg-primaryOrangeHover py-[1vw] max-md:text-[3vw] rounded-full font-semibold active:scale-95`}>Read More</Link>
            </div>
        </div>
    )
}

export default Cards
