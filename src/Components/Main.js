import React, { useEffect, useState } from 'react';
import Paint from './Paint';
import Reviews from './Reviews';

import profile from '../images/sarah.jpg';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const Main = () => {
    const [paints, setPaints] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPaints(data))
    }, [])
    return (
        <div className='w-7/12 mx-auto my-20'>
            <div className='flex'>
                <div className='w-9/12'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam nobis quo pariatur esse rerum quisquam, autem tenetur dolores veniam molestias nam similique repellat optio in provident velit officiis magnam?</p>
                    <div className='mt-5 md:flex items-center'>
                        <img className='w-9 h-9 rounded-full' src={profile} alt="" />
                        <h2 className='ml-2 text-blue-800 font-bold'>Kimberly  R Moseler</h2>
                    </div>
                    <div className='my-5'>
                        <Reviews />
                        <p></p>
                    </div>
                    <div class="flex space-x-4 mb-6 text-sm font-medium">
                        <div class="flex-auto flex space-x-4">
                            <button class="h-10 w-60 px-6 font-semibold rounded-full bg-blue-700 text-white flex justify-center items-center">
                                <p>See Class Schedule</p>
                                <IoIosArrowForward className='ml-2 text-xl' />
                            </button>
                            <div class="h-10 px-6 font-bold text-xl text-blue-900 flex justify-center items-center">
                                <AiOutlineHeart />
                                <p className='ml-1'>save</p>
                            </div>
                            <div className='h-10 px-6 font-bold text-xl text-blue-900 flex justify-center items-center'>
                                <p>Share</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-9/12 grid grid-cols-1 md:grid-cols-3'>
                    {paints.map(paint => <Paint paint={paint}></Paint>)}
                </div>
            </div>
        </div>
    );
};

export default Main;