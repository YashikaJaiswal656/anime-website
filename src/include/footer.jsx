import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <>
            <div className="footer_cont">
                <div className="contaner">
                    <div className="nav">
                        <div className="logo"><img src="https://themewagon.github.io/anime/img/logo.png" alt="" /></div>
                        <ul>
                            <Link to={"/"}><li> Homepage</li></Link>

                            <Link to={"/categories"}><li> Categories</li></Link>
                                      <Link to={"/about"}><li> About</li></Link>
                            <a href="https://www.linkedin.com/in/yashika-jaiswal-83202a345/" target='_blank'><li>Contact</li></a>
                        </ul>
<div className="copy">Copyright ©2025 All rights reserved | This website is made  by <span>Yashika</span>  </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default footer