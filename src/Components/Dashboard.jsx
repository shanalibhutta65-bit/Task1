import React, { use } from 'react'
import Card from './card'
import Cart from './cart'
import data from './data.json'
import profile from '../assets/pro.jpg'
import { ArrowBigRight, ArrowBigRightDash, ArrowRight, BanknoteArrowDown, CameraIcon, ChartAreaIcon, ChevronLeft, ChevronRight, IdCardLanyard, MoveRightIcon, Wallet } from 'lucide-react'
function Dashboard() {
  const user = data;
  return (
    <div className=' flex flex-col w-180 ml-4 mt-4 h-170 border bg-gray-200  '>
      <div className=' flex border justify-between '>
        <p className=' text-2xl font-bold '>Good morning, James!</p>
        <div className='flex items-end  mr-1 '>
          <ChevronLeft width={18} />
          <ChevronRight width={18} />
        </div>
      </div>
      <div className=' flex border justify-evenly gap-3.5 p-2 '>
        <Card Amount={"$143,624"} icon={<Wallet />} value1={"Your bank"} value2={"balance"} />
        <Card Amount={"143,624"} icon={<ChartAreaIcon />} value1={"Your bank"} value2={"balance"} />
        <Card Amount={"7"} icon={<IdCardLanyard />} value1={"Employees"} value2={"working today"} />
        <Card Amount={"$3,287.49"} icon={<BanknoteArrowDown size={25} />} value1={"This week's"} value2={"card spending"} />
      </div>
      <div className=' flex border '>
        <div className=' border flex flex-col gap-4'>
          <Cart value2={"+ 18.7%"} heading={"New clients"} value1={54} style={' bg-green-200 text-green-600  h-6 pl-2 pr-2 rounded-lg '} />
          <Cart value2={"+ 2.7%"} heading={"Invoices overdue"} value1={54} style={' bg-red-200 text-red-600  h-6 pl-2 pr-2 rounded-lg '} />
        </div>
        <div>

        </div>
      </div>
      <div className=' flex flex-col bg-white ml-2 rounded-2xl  '>
        <p className=' text-2xl font-bold '>Recent emails</p>
        <div className=' flex border flex-col '>
          {
            user.map((item) => (
              <div className='h-15 flex items-center px-4 hover:bg-gray-50 cursor-pointer'>
                <div className='w-15 flex items-center justify-center'>
                  <img className='h-10 w-10 rounded-full' src={profile} alt="" />
                </div>
                <p className='font-semibold w-40'>{item.name}</p>
                <p className='flex-1  text-gray-600 font-normal'>{item.Task}</p>
                <p className='text-gray-400 text-sm font-normal whitespace-nowrap'>{item.time}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Dashboard
