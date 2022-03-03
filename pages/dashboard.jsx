import Layout from "../components/Layout";
import { SideBar } from "../components/SideBar";
import Board from "../components/Board";

export default function Dashboard(){
    return (
        <Layout>
            <div className="w-full h-full flex justify-between full-minus-nav overflow-y-scroll min-dash-height">
                <SideBar></SideBar>
                <Board></Board>
            </div>
        </Layout>
    )
}