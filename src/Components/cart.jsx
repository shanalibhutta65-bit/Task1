import React from 'react'

function Cart({style,heading,value1,value2}) {
    return (
        <div className=' w-50 ml-2 bg-white flex flex-col justify-center  border h-30 rounded-xl'>
            <div className=' font-bold ml-8 mb-3'>{heading}</div>
            <div className='  flex gap-5 items-center ml-7 '>
                <div className=' text-5xl font-bold'>{value1}</div>
                <div className={style}>{value2}</div>
            </div>
        </div>
    )
}

export default Cart
