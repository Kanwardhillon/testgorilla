import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header_info'>Test 1</div>
            <div>
                <button className='header_button'>
                    <span style={{ fontSize: "15px", color: 'white' }}>Next</span>
                    <span style={{ fontSize: '10px', color: 'white' }}> <ArrowForwardIcon /></span>
                </button>
            </div>

        </header>
    )
}

export default Header
