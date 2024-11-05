// PackagesDetail.js
import React from 'react'
import Footer from '../../components/Footer'
import PackSlick from '../../components/PackSlick'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../../components/Book'
import { showBookModal } from '../../features/pageActionSlice'
import { useInView } from 'react-intersection-observer'

const PackagesDetail = () => {

    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const dispatch = useDispatch()
    const pack = useSelector((state) => state.packagesSlice?.packages);
    const modal = useSelector((state) => state.pageSlice.bookModal);

    const { slug } = useParams()
    const packItem = pack.find(item => item.slug === slug);

    return (
        <div className='w-full flex flex-col justify-between h-full overflow-y-auto'>
            <div className={`${modal ? "" : "hidden"}`}>
                <Book pack={packItem} />
            </div>
            <div>
                <div className='w-[85vw] mx-auto py-[4vw] flex flex-col gap-[1vw]'>
                    <div ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[8vw]"} transition-all duration-1000 relative`}><PackSlick images={packItem?.images} /></div>
                    <div className='py-[5vw]'>
                        <div>
                            <span ref={ref2} className={`${inView2 ? "opacity-100 top-0" : "opacity-0 top-[10vw]"} transition-all duration-1000 relative text-[2vw] px-[1vw] `}>{packItem?.details}</span>
                        </div>
                        <div ref={ref3} className={` ${inView3 ? "opacity-100 top-0" : "opacity-0 top-[8vw]"} transition-all duration-1000 relative flex justify-end py-[2vw]`}>
                            <button onClick={() => dispatch(showBookModal())} className='bg-primaryOrange px-[5vw] py-[1vw] font-bold text-white rounded active:scale-95'>Book Now</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PackagesDetail;
