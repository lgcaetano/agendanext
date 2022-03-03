import Input from "./Input"
import { useState } from "react"

export default function ReminderForm(props){

    function submitHandler(e){
        e.preventDefault()
    }
    
    const [date, setDate] = useState(null)
    const [label, setLabel] = useState(null)

    return(
        <form action="#" className={`flex flex-col items-center transition-all overflow-hidden 
            ${props.hidden ? "max-h-0" : "max-h-screen"}`} onSubmit={submitHandler}>
            
            <button className="p-4 text-3xl self-end" onClick={props.closeFun}>
                <i className="fas fa-times"></i>
            </button>


            <h1 className="text-2xl font-extrabold mb-4">
                Set new reminder:
            </h1>
        
            <Input type="date" name="date" id="date-in" bindFunction={setDate} noDynamic={true}/>
            <Input type="text" name="what should we remind you of?" id="label-in" bindFunction={setLabel}/>
            
            <button type="submit" className="border-2 border-white bg-gradient-to-r from-green-400 to-green-700
            text-white font-semibold px-6 py-2 rounded-full shadow-lg mb-10">
                Schedule reminder
            </button>

        </form>
    )
}