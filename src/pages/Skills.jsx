import {Skill} from "../components"
import styled from 'styled-components'


const skillsContent = [
    ["HTML 5", "The base to build the web. my knowlege covers basic tags, sematic tags, data attributes and more"],
    ["CSS 3","In Cascading Style Sheets my knowlege covers Css Basic, Box Model, Flex Box, Css Grid, and other features such as media queries and gradients"],
    ["JAVASCRIP","The base of the web 2. In this technology I have knowledge about control structures, loops, functions, arrow functions, dom handling, event handlers, Object Oriented Programming, array and string methods, etc."],
    ["REACT","In this technology my knowledge covers stateless and stateful components based on functional components, hooks such as useState, useEffect, useContext and others, besides this I have knowledge about packages such as styled-components, react router and others."],
    ["NODE","Although I do not master this technology, I have basic knowledge of it, some pre-built modules and other features."],
    ["ADOBE XD","Although I don't have enough knowledge to be a web designer, I do know how to use this tool to make some designs."],
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