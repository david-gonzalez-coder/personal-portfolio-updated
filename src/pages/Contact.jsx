import styled from "styled-components"
//icons
import {AiFillGithub, AiOutlineDribbble} from "react-icons/ai"
import { BsLinkedin } from 'react-icons/bs'
import { ImNpm } from 'react-icons/im'
import {HiMenuAlt1} from "react-icons/hi"
const A = styled.a`
    background: ${({bg})=> bg ? bg : "#3B3C3D"} ;
    box-shadow: 2px 3px 5px #0e0e0e;
`

const Card = ({img="", title="", bg="", href="#", icon=""}) =>{
    return (
        <A href={href} bg={bg} className="text-white inline-flex justify-center items-center p-4 gap-4 flex rounded-xl w-full  aspect-[16/7] ">
            <span className="text-[4rem]">{icon}</span>
            
            <span className="ml-5  text-4xl font-semibold text-center">{title}</span>
        </A>
    )
}

const Contact = () => {
    return (
        <section
            className="min-h-full p-4 sm:p-8   bg-slate-200"
            style={{ background: "linear-gradient(to right, #141414 0%, #141414 80%, #1a1a1a 80%, #1a1a1a 100%)", }}
            
        >
            <nav className="grid gap-4 md:gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full  w-full">
                <Card href="https://www.linkedin.com/in/david-gonzalez-d" title="Linkedin" icon={<BsLinkedin />} bg="#027CB7"/>
                <Card href="https://github.com/david-gonzalez-coder" title="Github" icon={<AiFillGithub />} bg="#333333" />
                <Card href="https://www.npmjs.com/~david-gonzalez-coder" title="Npm" icon={<ImNpm />} bg="#CD0001"/>
                <Card href="https://dribbble.com/davidd-gonzalez-coder" title="Dribbble" icon={<AiOutlineDribbble />} bg="#DE3E7A" />
                
            </nav>
            
        </section>
    )
}
export default Contact