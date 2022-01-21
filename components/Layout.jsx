import TopBar from "./TopBar"

export default function Layout(props){
    return (
        <div className="w-full min-h-screen bg-blue-200 font-sans">
            <TopBar></TopBar>
            <div className="flex flex-col justify-around items-center h-screen">
                {props.children}
            </div>
        </div>
    )
}