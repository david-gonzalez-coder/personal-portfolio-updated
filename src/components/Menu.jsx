import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from "styled-components"
import { useLocation } from "react-router";
//icons
import {AiFillGithub, AiOutlineDribbble} from "react-icons/ai"
import { BsLinkedin } from 'react-icons/bs'
import { ImNpm } from 'react-icons/im'
import {HiMenuAlt1} from "react-icons/hi"

const Drawer = styled.div`
    transform: ${({open}) => open ? "translate(0,0)" : "translate(-100%,0)"};
    .social-media{
        text-decoration: none;
        font-size: 2.5rem;
        display: inline-flex;
        align-items: center;
        margin: 20px 10px;
    }
`
const ItemMenu = ({to="", label=""}) => <Link to={to} className='hover:font-normal my-2 font-light text-4xl' >{label}</Link>
const Menu = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false)
    useEffect(()=>{setOpen(false)},[location])
    return (
        <header >
            <nav className='bg-white w-full sm:w-[90%] px-4 sm:px-0 m-auto flex items-center justify-between  h-[10vh] sticky z-50 rounded-b-lg'>
                <Link to="/"className='text-[1.2rem] font-medium'>David Gonzalez</Link>
                <Link to="contact"className='hidden sm:inline-block text-sm transition bg-gradient-to-r from-[#B721FF] to-[#21D4FD] rounded-full px-10 sm:px-16 py-2 text-md shadow-md shadow-slate-300 hover:shadow active:shadow-none text-white'>Contact</Link>
                <button className='text-4xl font-medium' onClick={()=> setOpen(!open)}><HiMenuAlt1 /></button>
            </nav>
            <Drawer open={open} className=' transition-transform duration-300 bg-white rounded-3xl fixed top-0 w-full sm:w-[400px] lg:w-[500px] h-screen z-40   flex flex-col items-center justify-center gap-20'>
                <nav className='flex flex-col items-center'>
                    <ItemMenu to="/" label="Home" />
                    <ItemMenu to="portfolio" label="Porfolio" />
                    <ItemMenu to="skills" label="Skills" />
                    <ItemMenu to="contact" label="Contact" />
                    <ItemMenu to="react-library" label="React components" />
                </nav>
                <nav className='flex'>
                    <a className='social-media' href='https://www.linkedin.com/in/david-gonzalez-d'>
                        <BsLinkedin  />
                    </a>
                    <a className='social-media' href='https://github.com/david-gonzalez-coder' >
                        <AiFillGithub />
                    </a>
                    <a className='social-media' href='https://www.npmjs.com/~david-gonzalez-coder' >
                        <ImNpm  />
                    </a>
                </nav>
            </Drawer>
            
        </header>
        
    )
}
export default Menu