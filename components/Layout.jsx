import TopBar from "./TopBar"
import Head from "next/head"

export default function Layout(props){
    return (
        <div className="w-full min-h-screen bg-blue-200 font-sans flex flex-col">
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
            </Head>
            <TopBar></TopBar>
            <div className="flex flex-col justify-around items-center my-auto">
                {props.children}
            </div>
        </div>
    )
}