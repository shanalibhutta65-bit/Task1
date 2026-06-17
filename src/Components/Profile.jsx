import { BellCheckIcon, BookOpenText, Calendar, ChevronDown, ClipboardCheck, ClipboardList, Clock, MessageCircleCheckIcon, MessageSquare } from 'lucide-react'
import React from 'react'
import profile from '../assests/pro.jpg'
import List from './list'

function Profile() {
    return (
        <div className=' w-70 border h-160 flex flex-col bg-purple-100 rounded-xl  '>
            <div className='  flex items-center justify-end gap-2 mr-3 '>
                <Calendar />
                <BellCheckIcon />
                <MessageSquare />
                <img src={profile} className=' w-8 h-8 rounded-full ' alt="" />
                <ChevronDown size={18} />
            </div>
            <div className=' flex flex-col '>
                <div className=' ml-3 border text-xl font-semibold '>Your to-Do list</div>
                <div className=' flex flex-col'>
                    <List icon={<BookOpenText />} value={"Run payroll"} date={"Mar 4 at 6:00 pm"} />
                    <List icon={<Clock />} value={"Review time off request"} date={"Mar 7 at 6:00 pm"} />
                    <List icon={<ClipboardList />} value={"Sign board resolution"} date={"Mar 12 at 6:00 pm"} />
                    <List icon={<ClipboardCheck />} value={"Finish onboarding Tony"} date={"Mar 12 at 6:00 pm"} />

                </div>
            </div>
            <div className=' w-55  h-30 rounded-lg bg-white  flex flex-col gap-1'>
                <p className=' ml-4 mt-3 font-semibold '>Board meeting</p>
                <p className=' text-sm ml-4 mb-1 font-semibold '>Feb 22 at 6:00 PM</p>
                <p className=' text-[13px] ml-4'>You have been invited to attend a meeting of the Board Directors.</p>
            </div>
        </div>
    )
}

export default Profile
