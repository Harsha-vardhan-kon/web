import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import { Button } from '@mui/material'
import { IoIosHome } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoMdSend } from "react-icons/io";
import { MdOutlineScheduleSend } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";

const Home = () => {
  return (
    <div className='sidebar'>
      <div>
        <Link to={'/'}><Button style={{width:'150px',position:'relative',top:'10px'}}><IoIosHome/>Home</Button></Link>
        <Link to={'/'}><Button style={{width:'150px',position:'relative',top:'25px'}}><IoMdSend />Post Content</Button></Link>
        <Link to={'/'}><Button style={{width:'150px',position:'relative',top:'35px'}}><MdOutlineScheduleSend />Schedule post</Button></Link>
        <Link to={'/ContactUs'}><Button style={{width:'150px',position:'relative',top:'45px'}}><CiPhone/>Contact Us</Button></Link>
        <Link to={'/'}><Button style={{width:'150px',position:'relative',top:'55px'}}><AiOutlineDashboard/>Dashboard</Button></Link>
        <Link to={'/Feedback'}><Button style={{width:'150px',position:'relative',top:'65px'}}><VscFeedback/>Feedback</Button></Link>
        <Link to={'/Aboutus'}><Button style={{width:'150px',position:'relative',top:'75px'}}><FcAbout/>About</Button></Link>
        <Link to={'/'}><Button style={{width:'150px',position:'relative',top:'220px',color:'error'}}><IoLogOutOutline/>LOGOUT</Button></Link>
      </div>
    </div>
  )
}

export default Home;