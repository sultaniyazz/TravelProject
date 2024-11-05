import { RxBorderWidth } from "react-icons/rx";
import { BiRightArrowAlt } from "react-icons/bi";
import React from 'react';
import pack from '../images/package.jpg';
import { useInView } from "react-intersection-observer";

const Welcome = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });


    return (
        <div className='flex gap-[.1vw] max-md:flex-col max-md:gap-[1vw]'>
            <div ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[10vw]"} transition-all relative duration-700 flex-1 justify-center flex group`}>
                <img className='transition-all  relative w-full object-cover md:group-hover:scale-105 duration-300 rounded object-center' src={pack} alt="Package" />
            </div>
            <div ref={ref2} className={`${inView2 ? "opacity-100 top-0" : "opacity-0 top-[12vw]"} transition-all duration-1000 relative flex-1 gap-[1vw] max-md:gap-[2vw] flex flex-col px-[3vw] py-[.5vw]`}>
                <span className='text-primaryOrange text-[1.5vw] max-md:text-[5vw] font-semibold flex items-center gap-[1vw] uppercase'>About Us<RxBorderWidth /></span>
                <h1 className='text-[3vw] max-md:text-[7vw] font-Itim font-bold'>Welcome to <span className='text-primaryOrange'>Tourvisto</span></h1>
                <div className='flex flex-col gap-[1vw] max-md:text-[4vw] text-primaryGray'>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                </div>
                <div className='grid text-primaryGray max-md:text-[4vw] grid-cols-2 max-md:grid-cols-1 gap-[1vw] max-md:gap-[2vw]'>
                    <div className="flex items-center gap-[.5vw] w-max"><BiRightArrowAlt className="text-primaryOrange text-bold" />First Class Flights</div>
                    <div className="flex items-center gap-[.5vw] w-max"><BiRightArrowAlt className="text-primaryOrange text-bold" />Handpicked Hotels</div>
                    <div className="flex items-center gap-[.5vw] w-max"><BiRightArrowAlt className="text-primaryOrange text-bold" />5 Star Accommodations</div>
                    <div className="flex items-center gap-[.5vw] w-max"><BiRightArrowAlt className="text-primaryOrange text-bold" />Latest Model Vehicles</div>
                    <div className="flex items-center gap-[.5vw] w-max"><BiRightArrowAlt className="text-primaryOrange text-bold" />Premium City Tours</div>
                    <div className="flex items-center gap-[.5vw] w-max"><BiRightArrowAlt className="text-primaryOrange text-bold" />24/7 Service</div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
