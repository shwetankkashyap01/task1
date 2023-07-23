import React from 'react';
import './Main.css';
import { Button} from '@mui/material';

function Main() {
  return (
    <div className="Parent">
      <div className="Header-container">
        <p>Bilgi Teknolojilerinde</p>
        <p>23 Yıllık Tecrübe</p>
      </div>
      <div className='desc'>
        <p>
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı
          sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş
          Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
      </div>
      <div className="MailInput">
        <div className="MailInputChild" />
        <div className='mail'>
        <span className="text">Mail bültenimize kayıt ol</span>
        <Button  className="mainbtn" variant='contained' color='error' >Kayıt Ol</Button>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Main;
