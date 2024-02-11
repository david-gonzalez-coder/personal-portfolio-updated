import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../components"
import {Home, Portfolio, Skills, Contact, NotFound, ProjectView, Asimov, ReactLibrary} from "../pages/Index"
const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route path="/" element={<Home />}/>
                    <Route path="portfolio" element={<Portfolio />}/>
                    <Route path="skills" element={<Skills />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="react-library" element={<ReactLibrary />}/>
                    <Route path="project/:id" element={<ProjectView />}/>
                    
                    <Route path="asimov" element={<Asimov />}/>

                    <Route path="*" element={<NotFound />}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRouter