import React, { useEffect, useState } from 'react'
import './about.css'
import Header from './include/header.jsx'

import { Link } from 'react-router-dom'
import Footer from './include/footer.jsx'
const About = () => {


  
  return (
    <>
      <Header />
      <div className="cont">
        <div className="container">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4637adf-84a6-4eba-8020-71e9a0452e82/ddvlk6k-0d6b4ac9-45ff-4bd3-ad38-700e5028506c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0NjM3YWRmLTg0YTYtNGViYS04MDIwLTcxZTlhMDQ1MmU4MlwvZGR2bGs2ay0wZDZiNGFjOS00NWZmLTRiZDMtYWQzOC03MDBlNTAyODUwNmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DgE5Bk8b_-_MTQM0YcNJijK0VHvpPWXx8hQOcTI-yTk" alt="" />
        
        <p>Welcome to our anime haven—a place created by fans, for fans. We’re a team of passionate anime lovers who believe that anime is more than just entertainment; it’s a vibrant culture filled with emotion, creativity, and powerful storytelling. Whether you're someone who grew up watching classics like Naruto, One Piece, and Death Note, or you’re diving into new favorites like Demon Slayer, Jujutsu Kaisen, or Attack on Titan, our mission is to make sure you never miss a moment of the action. Our website is designed to be your go-to source for everything anime—from detailed show information and episode summaries to character profiles, top recommendations, fan theories, and news about upcoming seasons and movies. We carefully curate content to help both newcomers and long-time fans discover series they’ll love. What sets us apart is our commitment to creating a community where anime fans can connect, share, and celebrate the art form we all enjoy. Whether you’re here to find your next binge-worthy series, track your favorite characters, or simply stay updated with the anime world, we’re thrilled to have you with us. So grab your headphones, cue the opening theme, and start your journey through the wonderful universe of anime—right here with us.</p>
        </div>
      </div>
      


<Footer/>
    </>
  )
}

export default About