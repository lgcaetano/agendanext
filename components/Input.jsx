import { useRef, useState } from "react"

function upperFirst(string){
    return string.substr(0, 1).toUpperCase() + string.substr(1)
}


export default function Input(props){

    const labelUp = "-translate-y-12"

    const [value, setValue] = useState("")

    const inputRef = useRef(null)
    

    return (
        <div className="relative flex flex-col">
            <input {...props} onChange={e => setValue(e.target.value)} value={value} ref={inputRef}
            onFocus={e => setValue(e.target.value)}   className="w-72 h-12 m-3 
            rounded-full border-2 shadow-md px-4 outline-blue-500 input-with-label" />

            <label htmlFor={props.name} className={`relative -top-12 left-6 transition-all pointer-events-none
            text-gray-500 self-start ${(value) ? "label-up" : ""}`}>
                {upperFirst(props.name)}
            </label>
        </div>
    )
}