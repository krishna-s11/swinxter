import React from 'react'
import "./css/channels.css";
import { MdImage } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";


const Channels = () => {
  return (
    <div className='channels'>
      <div className='channel_head'>
        <h1><img src='images/boy-avatar.jpg'/>thedarkmonarch</h1>
      </div>
      <div className='search_bar'>
        <input type="text" />
        <MdEmojiEmotions style={{fontSize: "35px", marginRight: "10px", cursor: "pointer"}} />
        <MdImage style={{fontSize: "35px", marginRight: "10px", cursor: "pointer"}} />
        <IoSend style={{fontSize: "30px", marginRight: "10px", cursor: "pointer"}}/>
      </div>
    </div>
  )
}

export default Channels