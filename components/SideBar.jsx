import SideBarOption from "./SideBarOption"
import ReminderForm from "./ReminderForm"
import { useState } from "react"

export function SideBar(){

    const [formFlag, setFormFlag] = useState(false)


    return (
        <nav className=" bg-blue-50 w-80 sticky left-0 top-0 full-minus-nav text-blue-900 font-semibold
        flex flex-col items-center shadow-2xl border-r-2 border-blue-500">
            
            <button className="p-4 bg-white font-bold text-xl rounded-full border-2 border-slate-300 mt-4 mb-2 
            shadow-lg hover:bg-blue-900 hover:text-white transition-all" onClick={() => setFormFlag(true)}>
                New Reminder <i className="fas fa-plus-circle text-red-500"></i>
            </button>
            
            <ReminderForm closeFun={() => setFormFlag(false)} hidden={!formFlag}></ReminderForm>
            
            <SideBarOption content="Scheduled reminders"></SideBarOption>
            <SideBarOption content="Expired reminders"></SideBarOption>
        </nav>
    )
}