import Layout from "../components/Layout";
import { SideBar } from "../components/SideBar";
import Board from "../components/Board";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/router";

export default function Dashboard(){

    const { isAuthenticated } = useContext(UserContext)

    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) router.push("/");
    }, []);

    return (
        <Layout>
            <div className="w-full h-full flex justify-between full-minus-nav overflow-y-scroll min-dash-height">
                <SideBar></SideBar>
                <Board></Board>
            </div>  
        </Layout>
    )
}