import { ChartArea, HomeIcon, PiggyBankIcon, SettingsIcon } from 'lucide-react'
import React from 'react'

function Sidebar() {
    return (
        <div className=' w-16 border bg-purple-500 h-155 flex flex-col items-center '>
            <div className=' text-white font-bold border w-12  '>dappr</div>
            <div>
                <HomeIcon/>
                <ChartArea/>
                <HomeIcon/>
            </div>
            <div className=' border '>
                <SettingsIcon color='white'/>
            </div>
        </div>
    )
}

export default Sidebar
