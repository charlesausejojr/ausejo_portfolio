import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
    return (
        <div className='footer'>
            <a href='https://github.com/charlesausejojr'><GitHubIcon/></a>
            <a href='https://web.facebook.com/cjausejo/'><FacebookIcon/></a>
            <a href='https://www.instagram.com/ausejomagnifico/?hl=en'><InstagramIcon/></a>
            <a href='https://twitter.com/Charlie_Preach'><TwitterIcon/></a>
        </div>
    )
}

export default Footer
