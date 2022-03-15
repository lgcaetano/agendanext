import { formatDate } from "../utils";
import ReminderMarker from "./ReminderMarker";
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";

export default function ReminderCard({ date, label, id }){

    const { deleteReminder } = useContext(UserContext)
    

    return (
      <div className="flex flex-col w-full gap-1 p-1 bg-gradient-to-b from-blue-100 to-blue-300">
        <div className="flex w-full">
            <h1 className="text-xl font-extrabold text-blue-800 ">
                {label}
            </h1>
            <div className="ml-auto mr-2 flex gap-4 text-xl">
                <button className="p-1 px-2 hover:bg-white rounded-full" onClick={() => deleteReminder(id)}>
                    <i className="text-red-500 fas"></i>
                </button>
            </div>    
        </div>
        <div className="font-bold flex w-full">
          <div className="text-stone-700">
            {formatDate(date)}
          </div>
          <ReminderMarker date={date}/>
        </div>
      </div>
    );
}