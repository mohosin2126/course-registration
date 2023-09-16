/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { list } from 'postcss';
import React from 'react';

const Right = ({selectedCourse,remaining,totalCredit}) => {

    return (
        <div>
             <div>
             <h1 className="border-b-2 border-slate-400 mb-2 text-[#2F80ED] text-center font-bold text-xl">Credit 
             Hour Remaining {remaining} hr </h1>
             </div>
                <div className='border-b-2 border-slate-400 mb-2'>
                <p className=" text-center font-bold text-xl">Course Name </p>
                { selectedCourse.map((card)=><ol key={card.id} className='list-disc '> <li className=''>{card.title}</li></ol>)}
                </div>
                <p className="  text-center font-bold text-xl">Total Credit Hour:{totalCredit}  </p>
        </div>
    );
};

export default Right;