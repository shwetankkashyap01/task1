import React from 'react'
import "./Third.css"
import image from "./images/little-circle.png"
function Third() {
  return (
    <div className='third-cont'>
    <h2>Test Yönetimiyle Neler Sağlıyoruz?</h2>
    <h3>IoT Destekli Çözümler</h3>

    <div className='sub-container'>
    <span className='third-span span1'>
    Yazılım Kalitesini
    Arttırıyoruz
    </span>
    <img src={image} alt="" />
    <span className='third-span'>
    Olası Hataları Önceden
Belirliyoruz
    </span>
    <img  src={image}  alt=""/>
    <span className='third-span'>Oluşabilecek Riskleri
Önlüyoruz</span>
<img  src={image} alt=""/>
<span  className='third-span span4'>Zaman ve Maliyetten
Tasarruf Sağlıyoruz</span>


    </div>

    </div>
  )
}

export default Third