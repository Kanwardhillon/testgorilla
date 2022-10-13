import React from 'react'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_icon'>
      <ChatBubbleOutlineOutlinedIcon  style={{backgroundColor: '#6CA798', fontSize:"35px", borderRadius: '100%',padding: '7px'}}/>
      </div>
    </div>
  )
}

export default Footer
