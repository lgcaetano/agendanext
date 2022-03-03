export default function SideBarOption(props){
    return <button className="w-4/5 h-10 flex justify-center items-center p-4 m-2 font-semibold hover:bg-white rounded-full">
        {props.content}
    </button>
}