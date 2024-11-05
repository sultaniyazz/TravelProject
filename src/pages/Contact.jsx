import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import React from 'react'
import Banner from '../components/Banner'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from "../components/Footer";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const Contact = () => {

    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('name required'),
            email: Yup.string().email('err emeai adress').required('email required'),
            phone: Yup.string().required('phonne number required'),
            message: Yup.string().required('description required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await axios.post('https://travel-data-base.onrender.com/user', values);
                resetForm()
                alert('succes')
            } catch (error) {
                alert('error: ' + error.message);
            }
        },
    });
    return (
        <div>
            <div>
                <Banner title={'Contact'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati possimus magnam ut?'} />
            </div>
            <div className='flex justify-center flex-col items-center py-[5vw]'>
                <span ref={ref1} className={`${inView1 ? "opacity-100 top-0" : "opacity-0 top-[5vw]"}  transition-all duration-1000 relative text-primaryOrange font-semibold text-[2vw] max-md:text-[4vw]`}>CONTACT US</span>
                <h1 ref={ref2} className={`${inView2 ? "opacity-100 top-0" : "opacity-0 top-[8vw]"}  transition-all duration-1000 relative text-[4vw] font-bold max-md:text-[6vw]`}>Contact For Any Query</h1>
            </div>
            <div className='flex max-md:flex-col w-[85vw] mx-auto py-[6vw]'>
                <div ref={ref3} className={`${inView3 ? "opacity-100 top-0" : "opacity-0 top-[3vw]"}  transition-all duration-1000 relative flex-1 p-[2vw] flex-col`}>
                    <div>
                        <h1 className='text-[2vw] font-semibold max-md:text-[5vw]'>Get In Touch</h1>
                        <p className='text-[1.4vw] text-primaryGray max-md:text-[3vw] my-[2vw]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
                    </div>
                    <div className='flex-col  max-md:py-[5vw] max-md:justify-between gap-[1.5vw] max-md:gap-[2vw]'>
                        <div className='flex  gap-[1vw] max-md:my-[3vw] my-[1vw] items-center'>
                            <div className="p-[1vw] bg-primaryOrange text-white font-bold rounded">
                                <GoLocation className="text-[1.5vw] max-md:text-[7vw]" />
                            </div>
                            <div className='flex flex-col gap-[.1vw]'>
                                <span className="text-[1.5vw] max-md:text-[4vw] font-semibold text-primaryOrange">Office</span>
                                <span className="text-primaryGray max-md:text-[2vw]">123 Street, New York, USA</span>
                            </div>
                        </div>

                        <div className='flex  gap-[1vw] max-md:my-[3vw] my-[1vw] items-center'>
                            <div className="p-[1vw] bg-primaryOrange text-white font-bold rounded">
                                <AiFillPhone className="text-[1.5vw] max-md:text-[7vw]" />
                            </div>
                            <div className='flex flex-col gap-[.2vw]'>
                                <span className="text-[1.5vw] max-md:text-[4vw] font-semibold text-primaryOrange">Mobile</span>
                                <span className="text-primaryGray max-md:text-[2vw]">+012 345 67890</span>
                            </div>
                        </div>
                        <div className='flex  gap-[1vw] max-md:my-[3vw] my-[1vw] items-center'>
                            <div className="p-[1vw] bg-primaryOrange text-white font-bold rounded">
                                <AiOutlineMail className="text-[1.5vw] max-md:text-[7vw]" />
                            </div>
                            <div className='flex flex-col gap-[.2vw]'>
                                <span className="text-[1.5vw] max-md:text-[4vw] font-semibold text-primaryOrange">Email</span>
                                <span className="text-primaryGray max-md:text-[2vw]">info@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref4} className={`${inView4 ? "opacity-100 top-0" : "opacity-0 top-[7vw]"}  transition-all duration-1000 relative max-w-[80vw] max-md:w-[100vw] mx-auto p-[2vw] flex-1`}>
                    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-sm">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Nubmer</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="message"
                                name="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className="mt-1 resize-none max-md:h-[20vw] h-[10vw] block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div className="text-red-500 text-sm">{formik.errors.message}</div>
                            ) : null}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 outline-none text-white p-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
