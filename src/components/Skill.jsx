import styled from "styled-components"

const Card = styled.div`
    box-shadow: 2px 3px 5px #0e0e0e;
`

const Skill = ({title="", description=""}) => {
    return (
        <Card 
            className="w-[250px] p-8 text-base m-4 h-full flex-col rounded-xl bg-[#1A1A1A] hover:bg-[#25CBCD]  transition-all flex flex-col text-white"
        >
            <span className="text-2xl text-center font-bold mb-6">{title}</span>
            <p>{description}</p>
        </Card>
    )
}
export default Skill