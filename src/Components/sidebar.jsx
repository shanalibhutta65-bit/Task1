import { ChartArea, HomeIcon, LucideDollarSign, Mail, MessageCircleDashed, PersonStanding, PersonStandingIcon, PiggyBankIcon, SettingsIcon, TriangleDashedIcon } from 'lucide-react'
import React from 'react'

function Sidebar() {
    return (
        <div className=' w-16  bg-purple-500 h-155 flex flex-col items-center justify-center gap-4  '>
            <div className=' font-[serif] text-white font-bold  w-12 h-20  '>dappr</div>
            <div className=' flex flex-col  gap-8 p-3 h-110'>
                <HomeIcon color='white'/>
                <ChartArea color='white'/>
                <HomeIcon color='white'/>
                <Mail color='white'/>
                <PersonStandingIcon color='white'/>
                <ChartArea color='white'/>
                <LucideDollarSign color='white'/>
            </div>
            <div className='border   '>
                <SettingsIcon color='white'/>
            </div>
        </div>
    )
}

export default Sidebar
