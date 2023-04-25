// import lemonEnglish from "../assets/images/lemonEnglish.png"
// import odysseyImg from "../assets/images/odysseyImg.png"
import tailwindPractices from "../assets/images/tailwindPractices.png"
import redesignAmazon from "../assets/images/redesignAmazon.png"

import { lemonInglshBaner } from "../assets/images"
const Card = ({img, title, href="#"}) =>{
    return (
        <a href={href} className="object-conver rounded-xl w-full bg-slate-500 aspect-video overflow-hidden">
            <img src={img} alt={title} className="h-full w-full object-conver" />
        </a>
    )
}
const Portfolio = () => {
    return (
        <section className="">
            <div  className="flex items-center justify-center h-[50vh] rounded-xl mb-6 bg-slate-200 ">
                <h2 className="font-black text-center leading-none sm:leading-normal text-[7rem] text-[#2D2D2D]">My Work</h2>
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] w-full md:gap-8">
                
                <a href="https://lemon-english.david-gonzalez.dev/" className=" inline-block border object-conver rounded-xl w-full col-span-full bg-slate-500 aspect-[17/7] overflow-hidden">
                    <img src={lemonInglshBaner} alt={"lemon english"} className="h-full w-full object-conver" />
                </a>
                <Card href="https://amazon-clone-redesign.david-gonzalez.dev/" img={redesignAmazon} />
                <Card href="https://tailwind-first-practices.david-gonzalez.dev/"img={tailwindPractices}/>
               
                
                
            </div>
        </section>
    )
}
export default Portfolio