import React from 'react'
import Banner from '../components/Banner'
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Packages = () => {
    const pack = useSelector((state) => state.packagesSlice?.packages);
    const packLoad = useSelector((state) => state.packagesSlice?.isPackLoad);
    const dests = useSelector(state => state.destinationsSlice?.destinations);




    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const findTitle = (id) => {
        const destination = dests.find(item => item.id === id);
        if (destination) {
            return destination.country;
        }
        return null;
    }


    return (
        <div>
            <div>
                <Banner title={'Packages'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor itaque voluptate, asperiores dolorem eaque?'} />
            </div>
            <div ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[5vw]"}  transition-all duration-1000 relative text-center py-[3vw]`}>
                <span className='text-primaryOrange font-semibold text-[3vw] max-md:text-[5vw]'>packages</span>
                <h1 className='font-bold text-[4vw] font-Itim max-md:text-[8vw]'>All <span className='text-primaryOrange'>Packages</span></h1>
            </div>
            {
                packLoad ?
                    <div className='h-[40vw] max-md:h-[100vw] flex justify-center items-center'>
                        <h1 className="flex items-center gap-[1vw] text-[2vw] max-md:text-[5vw]">Loading <span className="animate-spin"><FaSpinner /></span></h1>
                    </div>
                    :
                    <div className='w-[85vw] mx-auto grid grid-cols-3 max-md:grid-cols-1 max-md:gap-[5vw] gap-[1vw] py-[2vw]'>
                        {pack.map(item => (
                            <div key={item.id} className='rounded-[1vw]'>
                                <Cards img={item.images} location={findTitle(item.destinationId)} star={item.rating} description={item.title} price={item.price} slug={item.slug} />
                            </div>
                        ))}
                    </div>
            }


            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Packages
