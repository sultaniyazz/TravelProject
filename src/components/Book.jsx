import { AiOutlineClose } from "react-icons/ai";
import React from 'react';
import { useDispatch } from 'react-redux';
import { showBookModal } from '../features/pageActionSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useInView } from "react-intersection-observer";

const Book = ({ pack }) => {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        tour: pack?.title || '',
        notes: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        notes: Yup.string().required('Description is required'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await axios.post('https://travel-data-base.onrender.com/users', values);
            resetForm();
            alert('success')
            dispatch(showBookModal());
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };


    return (

        <div className={`absolute w-full h-full inset-0 backdrop-blur-[.2vw] flex items-center justify-center z-50`}>
            <div className="bg-white w-[80vw] max-w-[500px] p-8 rounded-lg shadow-lg relative">
                <h2 className="text-2xl font-bold mb-[2vw]">Book Your Package</h2>
                <p className="mb-[1vw]">Enter your details to proceed with the booking.</p>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-[2vw]">
                            <div>
                                <Field name="name" type="text" placeholder="Name" className="w-full p-[1vw]  border-[.1vw] outline-primaryOrange outline-[.1vw] rounded" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-[1.5vw]" />
                            </div>

                            <div>
                                <Field name="email" type="email" placeholder="Email" className="w-full p-[1vw]  border-[.1vw] outline-primaryOrange outline-[.1vw] rounded" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-[1.5vw]" />
                            </div>

                            <div>
                                <Field name="phone" type="text" placeholder="Phone" className="w-full p-[1vw]  border-[.1vw] outline-primaryOrange outline-[.1vw] rounded" />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-[1.5vw]" />
                            </div>

                            <div>
                                <Field name="tour" disabled value={pack?.title} type="text" className="w-full p-[1vw]  border-[.1vw] outline-primaryOrange outline-[.1vw] rounded" />
                                <ErrorMessage name="tour" component="div" className="text-red-500 text-[1.5vw]" />
                            </div>

                            <div>
                                <Field name="notes" as="textarea" placeholder="Additional Notes" className="w-full p-[1vw]  border-[.1vw] outline-primaryOrange outline-[.1vw] rounded resize-none" rows="3" />
                                <ErrorMessage name="notes" component="div" className="text-red-500 text-[1.5vw]" />
                            </div>

                            <button disabled={isSubmitting} type="submit" className={`${isSubmitting ? "cursor-not-allowed" : ""} w-full bg-primaryOrange text-white p-[1vw]  rounde-[.1vw] outline-primaryOrange outline-[.1vw]d font-bold hover:bg-orange-600`}>
                                {isSubmitting ? "Submit Booking..." : "Submit Booking"}
                            </button>
                        </Form>
                    )}
                </Formik>

                <button onClick={() => dispatch(showBookModal())} className="absolute top-[1vw]  right-[1vw] outline-primaryOrange outline-[.1vw]2 text-gray-600 hover:text-gray-800 text-xl font-bold">
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default Book;
