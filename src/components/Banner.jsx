import React from 'react'
import banner from '../images/bg-hero.jpg'
import { useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';

const Banner = ({ title, destN, packN, userN, paragraph }) => {

    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const home = useLocation()

    return (
        <div className='relative'>
            <div className='bg-black flex justify-center items-center'>
                <img className='w-full h-[80vh] object-cover object-center opacity-30' src={banner} alt="" />
                <div className='absolute flex flex-col gap-[2vw] items-center'>
                    <h1 ref={ref1} className={`${inView1 ? "opacity-100 bottom-0" : "opacity-0 bottom-[5vw]"} transition-all duration-1000 relative flex items-center flex-col font-Itim font-bold text-white text-[4vw] text-center`}>
                        <span className='max-md:text-[10vw] max-md:w-[90vw] '>{title}</span>
                        <span className='text-[1.5vw] text-primaryGray w-[70vw] max-md:w-[60vw] max-md:text-[3vw] text-center'>{paragraph}</span>
                    </h1>
                    <div ref={ref2} className={`${home.pathname == '/' ? "" : "hidden"} ${inView2 ? "opacity-100 bottom-0" : "opacity-0 bottom-[4vw]"} transition-all duration-1000 relative w-[50vw] max-md:w-[80vw] max-sm:w-[90vw] h-[13vh] max-md:h-[12vh] max-sm:h-[10vh] px-[5vw]  rounded-[1vw] bg-white flex justify-center items-center p-[1vw]`}>
                        <div className='flex-1 flex gap-[.5vw] justify-center flex-col items-center'>
                            <span className='max-md:text-[4vw] text-[2vw]'>{destN}</span>
                            <h1 className='text-[1.2vw] max-md:text-[3vw] font-medium'>destinations</h1>
                        </div>
                        <div className='flex-1 flex gap-[.5vw] justify-center flex-col items-center border-x-[.1vw] border-black'>
                            <span className='max-md:text-[4vw] text-[2vw]'>{packN}</span>
                            <h1 className='text-[1.2vw] max-md:text-[3vw] font-medium'>packages</h1>
                        </div>
                        <div className='flex-1 flex gap-[.5vw] justify-center flex-col items-center'>
                            <span className='max-md:text-[4vw] text-[2vw]'>{userN}</span>
                            <h1 className='text-[1.2vw] max-md:text-[3vw] font-medium'>users</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
