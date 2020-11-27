import { Button } from '@material-ui/core'
import React from 'react'
import './Header.css'
import { Link} from "react-router-dom";
function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <h2>Dekodeimos</h2>
            </div>
            <div className="header__right">
                <Link className='header__link' to='/'>
                     <Button className="header__button" > Home </Button>
                </Link>
                <Link className='header__link' to='/projects'>
                     <Button className="header__button" > Projects </Button>
                </Link>
            </div>
        </div>
    )
}

export default Header
