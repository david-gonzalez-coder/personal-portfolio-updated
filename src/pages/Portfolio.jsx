import lemonEnglish from "../assets/images/lemonEnglish.png"
// import odysseyImg from "../assets/images/odysseyImg.png"
import atomicImg from "../assets/images/atomicImg.png"
import redesignAmazon from "../assets/images/redesignAmazon.png"
const Card = ({img, title}) =>{
    return (
        <div className="object-conver rounded-xl w-full bg-slate-500 aspect-video overflow-hidden">
            <img src={img} alt={title} className="h-full w-full object-conver" />
        </div>
    )
}
const Portfolio = () => {
    return (
        <section className="">
            <div  className="flex items-center justify-center h-[50vh] rounded-xl mb-4 bg-slate-200 ">
                <h2 className="font-black text-center leading-none sm:leading-normal text-[7rem] text-[#2D2D2D]">My Work</h2>
            </div>
            <div className="p-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] w-full md:gap-8">
                <Card img={lemonEnglish}/>
                {/* <Card img={odysseyImg}/> */}
                <Card img={atomicImg}/>
                <Card img={redesignAmazon} />
                
            </div>
        </section>
    )
}
export default Portfolio