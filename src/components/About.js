import { Card, CardContent, Typography, CardMedia, Avatar } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import {pictureList} from '../productList'
import React from 'react'
import ReactPlayer from 'react-player'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className="about__left">
                <Card>
                <h2 className='about__left__title'>About Me</h2>
                    <CardContent>
                        <Typography>
                        Third Year Student of Computer Engineering in the University of San Carlos. Currently majoring in Software. <br/><br/>
                        An aspiring mobile and web developer. I aim to be a Senior Software Engineer. I want to not just work but to most importantly, contribute in a large company.<br/><br/>
                        Always ready to learn something new. Solving problems and applying practical solutions based from programming experience.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className='about__right'>
                    <img
                    className = 'about_img'
                    src = "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-9/84336026_3327871960563570_302116834348367872_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeFIyIyxE_5cs3mpWZwSID3hpShsUgJ_ChilKGxSAn8KGPq8FgILFmsIomAkD3a8mWPLQwLCbVx9PJD9lqXqc2B8&_nc_ohc=EL27jIXo-M4AX_3vJ9-&_nc_ht=scontent.fceb2-2.fna&oh=d3804526585613db2bf435a15ecd1c53&oe=5FE6E78A"
                    alt = "" />
            </div>
        </div>
    )
}

export default About
