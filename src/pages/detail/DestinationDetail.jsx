import { FaSpinner } from "react-icons/fa";
import React from 'react'
import banner from '../../images/bg-hero.jpg'
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';

const DestinationDetail = () => {
    const { slug } = useParams();
    const dests = useSelector(state => state.destinationsSlice?.destinations);
    const destsLoad = useSelector(state => state.destinationsSlice?.isDestLoad);
    const pack = useSelector(state => state.packagesSlice?.packages);
    const res = dests.find(item => item.slug === slug);
    const resPackId = pack.filter(item => item.destinationId === res?.id);

    const img = (id) => {
        const dest = dests.find(dest => dest.id === id);
        return dest ? dest.image : banner;
    }

    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div>
            <div className='h-full flex flex-col gap-[1vw] overflow-y-auto'>
                <div className='relative'>
                    <div className='bg-black flex justify-center items-center'>
                        <img className='w-full h-[20vh] max-md:h-[15vh] object-cover object-center opacity-30' src={img(res?.id)} alt="" />
                        <div className='absolute flex flex-col gap-[2vw] items-center'>
                            <div className='backdrop-blur-sm w-[80vw] flex justify-center rounded-[1vw] border-[.1vw]'>
                                <h1 ref={ref1} className={`${inView1 ? "opacity-100 bottom-0" : "opacity-0 bottom-[5vw]"} transition-all duration-1000 relative font-Itim font-bold text-white text-[4vw] max-md:text-[5vw]  text-center`}>
                                    {res ? res.country : "Destination not found"}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                {destsLoad ?
                    <div className='h-[40vw] max-md:h-[100vw] flex justify-center items-center'>
                        <h1 className="flex items-center gap-[1vw] text-[2vw] max-md:text-[5vw]">Loading <span className="animate-spin"><FaSpinner /></span></h1>
                    </div>
                    :
                    <div>
                        <div className='w-[85vw] mx-auto py-[5vw] grid grid-cols-3 max-md:grid-cols-1 gap-[1vw]'>
                            {resPackId.map(item => (
                                <div key={item.id} className='rounded-[1vw]'>
                                    <Cards img={item.images} location={item.title} star={item.rating} description={item.title} price={item.price} />
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DestinationDetail;
