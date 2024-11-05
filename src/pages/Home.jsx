import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import DestSlick from '../components/DestSlick'
import { useInView } from 'react-intersection-observer'

const Home = () => {

    const pack = useSelector((state) => state.packagesSlice?.packages);
    const packLoad = useSelector((state) => state.packagesSlice?.isPackLoad);
    const dests = useSelector(state => state.destinationsSlice?.destinations);
    const user = useSelector(state => state.userSlice);


    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });



    return (
        <div>
            <div>
                <Banner title={'Enjoy Your Vacation With Us'} destN={dests.length} packN={pack.length} userN={'694'} />
            </div>
            <div className='w-[85vw] mx-auto py-[7vw]'>
                <Welcome />
            </div>
            <div className={` py-[7vw] w-[85vw] mx-auto flex flex-col gap-[2vw]`}>
                <div ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[8vw]"} transition-all duration-1000 relative flex w-full justify-center text-[3vw] flex-col items-center `}>
                    <span className='text-[2vw] font-Itim text-primaryOrange font-semibold max-md:text-[5vw]'>Destinations</span>
                    <h1 className='font-bold max-md:text-[6vw]'>All Destinations</h1>
                </div>
                <div ref={ref2} className={`${inView2 ? "opacity-100 top-0" : "opacity-0 top-[10vw]"} transition-all duration-1000 relative`}>
                    <DestSlick />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
