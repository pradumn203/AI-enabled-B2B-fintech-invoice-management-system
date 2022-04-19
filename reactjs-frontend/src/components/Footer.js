import React from 'react'
import './Footer.css';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div className="link">
          <span className='footer-text'><a href="https://pluralsight.com">Privacy Policy</a> |    
            < CopyrightIcon  style={{fontSize:15}}/>
            2022 HighRadius Corporation.All rights reserved.</span> 
        </div>
      )
}
export default Footer