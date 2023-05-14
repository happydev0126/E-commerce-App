import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GiAbstract010 } from 'react-icons/gi';
import { GrCompliance, GrUser } from 'react-icons/gr';
import { FaUserAlt } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { TfiStatsUp } from 'react-icons/tfi';



interface Props {
    key: number;
    Icon: any;
    color: string;
    title: string;
    count: number;
}

export default function StatsTiles({ Icon, title, count }: Props) {
    return (
        <div className='w-96 h-40 m-2 dark:text-black cursor-pointer hover:shadow-xl transition-all duration-500 bg-white rounded flex flex-col items-center justify-center'>
            {Icon === 'GrCompliance' && <GrCompliance className='text-3xl text-orange-600' />}
            {Icon === 'GrUser' && <GrUser className='text-3xl text-orange-600' />}
            {Icon === 'GiAbstract010' && <GiAbstract010 className='text-3xl text-orange-600' />}
            {Icon === 'AiOutlineClockCircle' && <AiOutlineClockCircle className='text-3xl text-orange-600' />}
            {Icon === 'FaUserAlt' && <FaUserAlt className='text-3xl text-orange-600' />}
            {Icon === 'CgMenuGridR' && <CgMenuGridR className='text-3xl text-orange-600' />}
            {Icon === 'TfiStatsUp' && <TfiStatsUp className='text-3xl text-orange-600' />}
            <p className="text-sm mt-1">{title}</p>
            <p className="text-2xl mt-2 font-bold">{count}</p>
        </div>
    )
}
