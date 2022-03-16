import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const LOGOUT_GLYPH = ""

export default function TopBar(){
    
    const { isAuthenticated, logOut } = useContext(UserContext)

    return (
        <nav className="flex bg-gradient-to-r from-blue-800 to-blue-900 sticky top-0 
        w-full p-3 text-white shadow-blue-700 shadow-md h-16 z-10">
            <div id="icon-container">
                <i className="far fa-calendar-alt text-3xl border-r-2 border-white px-4"></i>
            </div>
            <div className="ml-10 text-2xl font-bold">
                Your Calendar
            </div>
            <div className={`flex text-xl font-bold ml-auto items-center ${isAuthenticated ? "" : "hidden"}`}>
                <span className="border-r-2 border-white px-4 mr-4">
                    Log Out
                </span>
                <button onClick={logOut}>
                    <i className="text-white fas ">{LOGOUT_GLYPH}</i>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </div>
        </nav>
    )
}