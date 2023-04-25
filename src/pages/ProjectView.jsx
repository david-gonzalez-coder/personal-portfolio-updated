import { useParams } from "react-router"
import styled from 'styled-components'

const Hero = styled.section`
    background: #f9b847;
    @media (min-width: 640px){
        background: linear-gradient(to right, #f2f2f2 0%, #f2f2f2 30%, #f9b847 30%, #f9b847 100%);

    }
`
const projects = [
    {
        alias: "LEMON", 
        title: "Lemon English", 
        description: `This is a site to learn English in a visual and dynamic way.`,
        links: [
            ["Demo", "https://lemon-english.david-gonzalez.dev/"]
        ]
    }
]

const ProjectView = ({}) => {
    const {id} = useParams()
    const {links, alias, title, description } = projects[id]
    return (
        <section>
            <Hero className="relative flex items-center  justify-end text-white h-[90vh]" >
                <span className="break-words hidden w-1/4 sm:inline absolute left-10 text-[7rem] font-extrabold leading-none text-[#363636]">
                    {alias}
                </span>
                <article className="text-justify p-8 flex flex-col items-center justify-center sm:w-[70%] ">
                    <h2 className="text-[#363636] text-2xl mb-8 font-bold text-center ">{title}</h2>
                    <p className="max-w-prose leading-relaxed text-xl">
                        {description}
                    </p>
                </article>
                
            </Hero>
            <nav className="mt-8 rounded-xl bg-[#f2f2f2] min-h-[10vh] h-[15vh] flex items-center justify-around">
                {links.map(link => 
                    <a 
                        key={link[0]} 
                        href={link[1] || "#"}
                        className="shadow-lg hover:shadow transition-shadow shadow-slate-300 my-2 font-light  bg-[#363636] text-white rounded-full px-8 py-2"
                    >{link[0]}</a> )}

            </nav>
        </section>
    )
}
export default ProjectView