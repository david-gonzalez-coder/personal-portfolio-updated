import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { useLocation } from "react-router";
import { useRef, useEffect } from "react";
import {Footer, Menu} from "./index"
const Wrapper = styled.div`
    ::-webkit-scrollbar{
        display: none ;
    }
`
const Layout = () => {
    const location = useLocation();
    const refWrapper = useRef(null)
    useEffect(() => {
        refWrapper.current.scrollTo(0, 0);
    }, [location]);
    return (
        <div className="h-screen flex flex-col">
            <Menu />
            <Wrapper ref={refWrapper} className=" overflow-y-scroll bg-white sm:rounded-xl content-container grow mb-[10vh] m-auto w-full sm:w-[90%]">
                <Outlet />
            </Wrapper>
            <Footer />
        </div>
    )
}
export default Layout