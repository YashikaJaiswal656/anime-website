import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
    const toggleMenu = () => {
        const sideMenu = document.querySelector(".side_bar");
        const menuIcon = document.querySelector(".fa-bars");

        if (sideMenu.classList.contains("showw")) {
            sideMenu.classList.remove("showw");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        } else {
            sideMenu.classList.add("showw");
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        }
    };
  return (
    <>
    
    
      <div className="nav">
        <div className="logo"><img src="https://themewagon.github.io/anime/img/logo.png" alt="" /></div>
        <ul>
<Link to={"/"}><li> Homepage</li></Link>
          
<Link to={"/categories"}><li> Categories</li></Link>
                    <Link to={"/about"}><li> About</li></Link>
          <a href="https://www.linkedin.com/in/yashika-jaiswal-83202a345/" target='_blank'><li>Contact</li></a>
        </ul>
        <div className="search"><input type="text" placeholder="Search......." />
          <button>
            <i class="fas fa-search"></i>

          </button>
          <div className="bar" onClick={toggleMenu}><i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
<div className="side_bar">
  <ul>

          <Link to={"/"}><li> Homepage</li></Link>
          <Link to={"/categories"}><li> Categories</li></Link>
          <Link to={"/about"}><li> About</li></Link>
          <a href="https://www.linkedin.com/in/yashika-jaiswal-83202a345/" target='_blank'><li>Contact</li></a>
  </ul>
</div>
    
    </>
  )
}

export default header