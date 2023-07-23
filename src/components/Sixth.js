import React from 'react'
import sixth1 from "./images/sixth.png"
import { Button } from '@mui/material'
import "./Sixth.css"
function Sixth() {
  return (
    <div className='sixth-cont'>
    <div className='sixth-inner-cont'>
    <img src={sixth1} alt=""></img>
    <h2>Bize Ulaşın</h2>
    <h3>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</h3>
    <div className='sixth-btn'><Button variant='contained' color='error' style={{margin: '0 auto', display: "flex"}}>Bize Ulaşın</Button></div>
    </div>
    </div>
  )
}

export default Sixth