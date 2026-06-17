import React from 'react'

function List({ value, date, icon }) {
    return (
        <div className=' flex border ml-3 gap-3  '>

            <div className=' w-12 h-12 bg-gray-300 flex items-center justify-center rounded-xl '>
                {icon}
            </div>
            <div className=' flex flex-col '>
                <p className=' font-bold text-sm'>
                    {value}
                </p>

                <p className=' text-sm font-semibold text-gray-500'>
                    {date}
                </p>

            </div>

        </div>
    )
}

export default List
