import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Board(props){

    const { reminders } = useContext(UserContext)

    console.log(reminders)

    return (
        <div className=" bg-blue-50 w-full min-dash-height grow  m-4 rounded-3xl shadow-2xl">
            
        </div>
    )
}