import { formatDate } from "../utils";
import ReminderMarker from "./ReminderMarker";
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const TRASH_GLYPH = ""
const PENCIL_GLYPH = ""
const CHECK_GLYPH = ""



export default function ReminderCard({ date, label, id }){

    const { deleteReminder, editReminder } = useContext(UserContext)

    const [labelValue, setLabelValue] = useState(label || "")
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      console.log(date)
    }, [date])

    

    async function confirmChanges(){
      setLoading(true)
      await editReminder(id, {
        date,
        label: labelValue
      })
      setEdit(false)
      setLoading(false)
    }

    return (
      <div className="flex flex-col w-full gap-1 p-1 bg-gradient-to-b from-blue-100 to-blue-300">
        <div className="flex w-full">
          <input
            className={`text-xl font-extrabold text-blue-800 w-full ${
              edit ? "shadow-sm border-2 border-gray-300" : "bg-inherit"
            } rounded-full outline-none px-2 mr-2`}
            value={labelValue}
            onChange={(e) => setLabelValue(e.target.value)}
            disabled={!edit}
          />
          <div className="ml-auto mr-2 flex gap-4 text-xl">
            <button
              className="p-1 px-2 hover:bg-white rounded-full"
              onClick={() => deleteReminder(id)}
            >
              <i className="text-red-500 fas">{TRASH_GLYPH}</i>
            </button>
            {edit ? (
              <button
                className="p-1 px-2 hover:bg-white rounded-full"
                onClick={confirmChanges}
              >
                {loading ? (
                  <ClipLoader color="green" size={18}></ClipLoader>
                ) : (
                  <i className="text-green-500 fas">{CHECK_GLYPH}</i>
                )}
              </button>
            ) : (
              <button
                className="p-1 px-2 hover:bg-white rounded-full"
                onClick={() => setEdit(true)}
              >
                <i className="text-yellow-500 fas">{PENCIL_GLYPH}</i>
              </button>
            )}
          </div>
        </div>
        <div className="font-bold flex w-full">
          <div className="text-stone-700">{formatDate(date)}</div>
          <ReminderMarker date={date} />
        </div>
      </div>
    );
}