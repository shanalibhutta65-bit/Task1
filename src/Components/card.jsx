import { EllipsisVertical, Wallet2Icon } from 'lucide-react'
import React from 'react'

function Card({Amount,icon,value1,value2}) {
    return (
        <div className=' bg-white w-42 h-40 border rounded-xl justify-evenly items- flex flex-col '>
            <div className='flex border justify-evenly gap-17 '>
             {icon}
                <div className='bg-gray-200 w-6 flex items-center justify-center rounded-full'>
                    <EllipsisVertical size={18} />
                </div>
            </div>
            <div className=' border text-2xl ml-4 font-bold'>
                <p>{Amount}</p>
            </div>
            <div className=' ml-4 font-semibold border '>
                {value1} <br /> {value2}
            </div>
        </div>
    )
}

export default Card
