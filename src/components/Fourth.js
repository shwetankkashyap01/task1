import { Button } from '@mui/material'
import React from 'react'
import image41 from "./images/fourth1.jpg"
import image42 from "./images/fourth2.jpg"
import "./Fourth.css"

function Fourth() {
  return (
    <div  className='fourth-cont'>
    <div  className='row1'>
    <div className='fourth-cont1'>
    <h1>Kalite ve Süreç Yönetimi</h1>
    <p>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</p>
  <Button  variant='contained' color='error'>Keşfet</Button>
    </div>
    <div className="image41-cont">
    <img src={image41} alt=""/>
    </div>
    </div>


    {/* .................NEW row..................*/}

    <div  className='row2'>
    <div className="image42-cont">
    <img src={image42} alt=""/>
    </div>
    <div className='fourth-cont2'>
    <h1>Test Yönetimi ve Analizi</h1>
    <p>Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.</p>
  <Button  variant='contained' color='error'>Keşfet</Button>
    </div>
    
    </div>

    </div>
  )
}

export default Fourth