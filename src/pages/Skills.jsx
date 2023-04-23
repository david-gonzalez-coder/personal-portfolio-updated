import {Skill} from "../components"
import styled from 'styled-components'


const skillsContent = [
    ["HTML 5", "Semantic tags, audio and video tags and more"],
    ["CSS 3","In Cascading Style Sheets my knowlege covers Css Basic, Box Model, Flex Box, Css Grid, media queries, keyframes and more"],
    ["JAVASCRIP","Control structures, loops, functions, arrow functions, dom handling, event handlers, Object Oriented Programming, array and string methods and more"],
    ["REACT","Stateless and stateful components based on functional components, hooks such as useState, useEffect, useContext and others, besides this I have knowledge about packages such as styled-components, react router and others."],
    ["Tailwind","This is a powerful utility-based css framework which is highly efficient."],
    ["NODE","I have a basic knowledge of this technology"],
    ["ADOBE XD","Do you want a creative but elegant website? I can help you with the design of your website"],
    ["AIs","I have knowledge about the management of different artificial intelligence for the creation of content such as chatGPT, midjourney, SAM among others."],
]
const Slider = styled.main`
    ::-webkit-scrollbar{
        height:8px ;
    }
    ::-webkit-scrollbar-thumb{
        background:#3B3C3D ;
        border-radius:10px ;
    }
`
const Skills = () => {
    return (
        <section
            className="flex items-center justify-center h-full"
            style={{background: "linear-gradient(to right, #141414 0%, #141414 80%, #1a1a1a 80%, #1a1a1a 100%)"}}
        >
            <Slider className="min-h-[400px] h-[44vh]  flex flex-col flex-wrap overflow-x-scroll w-screen">
                {skillsContent.map((skill) => <Skill key={skill} title={skill[0]} description={skill[1]}/>)}
            </Slider>
        </section>
    )
}
export default Skills