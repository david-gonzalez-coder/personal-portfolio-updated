import { Link } from "react-router-dom"

const Home = () => {
    return (
        <main className="max-w-screen-xl m-auto rounded-lg overflow-hidden">
            <section 
                className="relative flex items-center  text-white h-[90vh]" 
                style={{background: "linear-gradient(to right, #141414 0%, #141414 80%, #1a1a1a 80%, #1a1a1a 100%)"}}>
                <main className=" p-8 flex justify-center sm:w-[calc(80%-90px)] ">
                    <p className="max-w-[450px] leading-relaxed text-xl">
                        I am a front-end and open source developer. I have experience in building npm packages and 
                        open source projects. I constantly learn new things, not only related to programming, but 
                        many other topics. which gives me a different perspective to solve problems. 
                    </p>
                </main>
                <span className="hidden sm:inline absolute left-[calc(80%-90px)] text-[7rem] font-extrabold leading-none">
                    HE<br />LLO
                </span>
            </section>
            <nav className="bg-[#f2f2f2] min-h-[10vh] h-[30vh] flex items-center justify-around">
                <Link to="portfolio" className="my-2 font-light text-3xl sm:text-4xl">Portfolio</Link>
                <Link to="skills" className="my-2 font-light text-3xl sm:text-4xl">Skills</Link>
            </nav>
        </main>
    )
}
export default Home