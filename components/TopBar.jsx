export default function TopBar(){
    return (
        <nav className="flex bg-gradient-to-r from-blue-800 to-blue-900 sticky top-0 
        w-full p-3 text-white shadow-blue-700 shadow-md h-16 z-10">
            <div id="icon-container">
                <i className="far fa-calendar-alt text-3xl border-r-2 border-white px-4"></i>
            </div>
            <div className="ml-10 text-2xl font-bold">
                Your Calendar
            </div>
        </nav>
    )
}