import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components"
import {Home, Portfolio, Skills, Contact, NotFound} from "../pages/Index"
const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="*" element={<NotFound />}/>

                    <Route path="/" element={<Home />}/>
                    <Route path="portfolio" element={<Portfolio />}/>
                    <Route path="skills" element={<Skills />}/>
                    <Route path="contact" element={<Contact />}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRouter