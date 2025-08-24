import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <a href="/"><img src={Logo} alt="Logo" /></a>
            </div>
            <div className="links">
                <Link className='link' to={"/?cat=art"}>
                    <h6>ART</h6>
                </Link>

                <Link className='link' to={"/?cat=technology"}>
                    <h6>TECHNOLOGY</h6>
                </Link>

                <Link className='link' to={"/?cat=lifestyle"}>
                    <h6>LIFESTYLE</h6>
                </Link>

                <Link className='link' to={"/?cat=food"}>
                    <h6>FOOD</h6>
                </Link>

                <Link className='link' to={"/?cat=travel"}>
                    <h6>TRAVEL</h6>
                </Link>

                <span>Jhon</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className='link' to={"/write"}>
                        <h6>Write</h6>
                    </Link>
                </span>


            </div>
        </div>
    </div>
  )
}

export default Navbar