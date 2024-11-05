import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowForward } from 'react-icons/io'
import { SiAircanada } from 'react-icons/si'
import { showSideBar } from '../features/pageActionSlice'
import navList from '../constant/nav'

const RootLayout = () => {
    const dispatch = useDispatch()
    const modal = useSelector(state => state.pageSlice.sideBar)


    return (
        <div className='w-full h-[100vh] text-[1vw] max-md:text-[2vw] max-sm:text-[3vw] overflow-hidden select-none font-Poppins text-primaryGrayDark'>
            <div className={`${modal ? "left-0" : "left-[-55%]"} w-[55vw] md:hidden dark:bg-[#131313] duration-500 fixed z-30 bg-white  flex flex-col gap-[.4vw]`}>
                <div className='h-[10vh] max-md:h-[9vh] rounded-[.4vw] text-[2vw] max-md:text-[2.3vw]  gap-[.2vw] p-[1vw] border-[.1vw] dark:border-gray-800 shadow-[0vw_0.2vw_0.3vw_0.1vw_rgba(34,60,80,0.2)] flex justify-center items-center'>
                    <span className="text-[7vw] text-orange-600"><SiAircanada /></span>
                    <span className="font-bold text-[8vw] font-Itim">Tourvisto</span>
                </div>
                <div className='h-[90vh] max-md:h-[91vh] rounded-[.4vw] py-[1vw] px-[.5vw] border-[.1vw] dark:border-gray-800 shadow-[0vw_0.2vw_0.3vw_0.1vw_rgba(34,60,80,0.2)]'>
                    <div className='flex flex-col gap-[1vw] px-[.5vw]'>
                        {navList.map((nav) => (
                            <NavLink onClick={() => dispatch(showSideBar())} key={nav.id} to={nav.path} className={({ isActive }) => `font-medium rounded px-[2vw] duration-200 flex flex-col border-[.1vw] py-[3vw] text-[1.2vw] active:scale-95 ${isActive ? 'text-primaryOrange hover:text-primaryOrangeHover' : 'hover:text-primaryGray'}`}>
                                <span className='text-[4vw]'>{nav.title}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <button className="absolute z-20 right-0 translate-x-[80%] md:hidden opacity-60 h-full">
                    <span onClick={() => dispatch(showSideBar())} className="text-[8vw]">
                        {modal ? (
                            <IoIosArrowForward className="bg-orange-500 h-[12vw] text-white w-[6vw] rotate-180" />
                        ) : (
                            <IoIosArrowForward className="bg-orange-500 h-[12vw] text-white w-[6vw]" />
                        )}
                    </span>
                </button>
            </div>
            <div className='h-[12vh] max-sm:h-[10vh] border-b-[.1vw] flex items-center'>
                <Header />
            </div>
            <div className='h-[88vh] max-sm:h-[90vh] overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout