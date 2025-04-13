import { Link } from "react-router-dom"
import SplineViewer from "../components/SplineViewer"
import Spline from '@splinetool/react-spline';

const Home = () => {
    return (
        <main className="max-w-screen-xl m-auto rounded-lg overflow-hidden">
            <section 
                className="relative flex items-center  text-white h-[80vh]" 
                style={{background: "linear-gradient(to right, #141414 0%, #141414 80%, #1a1a1a 80%, #1a1a1a 100%)"}}>
                {/* <div class="blob blob__blue blob__md  top-[10vh]"></div>
                <div class="blob blob__pink blob__md  top-[60vh] right-[10vw]"></div>
                <div class="blob blob__blue blob__md  top-[100vh] left-[10vw]"></div> */}
                <main className=" p-8 flex items-center justify-center sm:w-[calc(80%-90px)] flex-col ">
                    <h1 class="mb-8 leading-[4rem] text-center text-[3.5rem] font-bold flex flex-col">
                        <span>I'm David</span>
                        <span>Full stack developer</span>
                    </h1>
                    <p className="max-w-[450px] leading-relaxed text-xl">
                    Passionate about technology, design and creativity, I seek to create unique experiences for the user. Always looking for the avant-garde.
                        {/* I am a front-end and open source developer. I have experience in building npm packages and 
                        open source projects. I constantly learn new things, not only related to programming, but 
                        many other topics. which gives me a different perspective to solve problems.  */}
                    </p>
                </main>
                <span className="hidden sm:inline absolute left-[calc(80%-90px)] text-[7rem] font-extrabold leading-none">
                    HE<br />LLO
                </span>
            </section>
            <section
                className="z-10"
                style={{background: "linear-gradient(to right, #141414 0%, #141414 80%, #1a1a1a 80%, #1a1a1a 100%)"}}
            >
                <div className="  m-auto">
                    {/* <SplineViewer scene="https://prod.spline.design/NBsvGSP3EVFMv5b9/scene.splinecode" /> */}
                    <Spline
                        
                        scene="https://prod.spline.design/NBsvGSP3EVFMv5b9/scene.splinecode" 
                    />
                </div>

            </section>
            <nav className="bg-[#f2f2f2] min-h-[10vh] h-[30vh] flex items-center justify-around">
                <Link to="portfolio" className="my-2 font-light text-3xl sm:text-4xl">Portfolio</Link>
                <Link to="skills" className="my-2 font-light text-3xl sm:text-4xl">Skills</Link>
            </nav>
        </main>
    )
}
export default Home