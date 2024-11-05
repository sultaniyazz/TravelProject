import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Destinations = () => {
    const dests = useSelector(state => state.destinationsSlice?.destinations);
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div>
            <div>
                <Banner title={'Destinations'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, esse'} />
            </div>
            <div ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[5vw]"} text-center py-[3vw] transition-all duration-1000 relative`}>
                <span className='text-primaryOrange font-semibold text-[3vw] max-md:text-[5vw]'>Destinations</span>
                <h1 className='font-bold text-[4vw] font-Itim max-md:text-[8vw]'>All <span className='text-primaryOrange'>Destinations</span></h1>
            </div>
            <div className='w-[85vw] mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-[1vw] py-[2vw]'>
                {dests.map(item => (
                    <div key={item.id} className='rounded-[1vw]'>
                        <Cards img={item.image} location={item.country} star={'5'} description={item.description} slug={item.slug} />
                    </div>
                ))}
            </div>
            <div>

                <Footer />
            </div>
        </div>
    );
};

export default Destinations;
