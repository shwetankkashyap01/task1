import React from "react";
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-row">
        <div className="foot-cont-1 child">
          <b>Çözüm ve Hizmetler</b>
          <p>Yazılım Geliştirme</p>
          <p>Outsourcing</p>
          <p>Kalite ve Süreç Yönetimi</p>
          <p>Danışmanlık</p>
          <p>IoT Destekli Çözümler</p>
        </div>

        <div className="foot-cont-2 child">
          <b>Ürünler</b>
          <p>Eğitim Yönetim Sistemi</p>
          <p>İnsan Sermayesi Yönetim Sistemi</p>
          <p>Müşteri İlişkileri Yönetim Sistemi</p>
          <p>İçerik Yönetim Sistemi</p>
        </div>

        <div className="foot-cont-3 child">
          <b>Kurumsal</b>
          <p>Hakkımızda</p>
          <p>Belge ve Yetkinlikler</p>
          <p>İş Ortakları</p>
        </div>

        <div className="foot-cont-4 child">
          <b>İletişim</b>
          <p>Bilgi İstek Formu</p>
          <p>Uzman Talep Formu</p>
        </div>
      </div>
      <div className="foot-end">
     <p>© Copyright 2010-2021 - Can Çevik</p>
    
    <div className="icons">
     <LinkedInIcon className="footer-icon"/>
     <TwitterIcon className="footer-icon"/>
     <InstagramIcon className="footer-icon"/>
     <FacebookOutlinedIcon className="footer-icon"/>
     </div>

     </div>
    </div>
  );
}

export default Footer;
