import React from 'react';

const Paint = ({ paint }) => {
    const { img } = paint;
    return (
        <div className='ml-20'>
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default Paint;