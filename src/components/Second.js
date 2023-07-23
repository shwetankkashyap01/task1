import React from "react";
import "./Second.css";
import Image1 from './images/type1.png';
import Image2 from './images/type2.png';
import Image3 from './images/type3.png';
import Image4 from './images/type4.png';
import Image5 from './images/type5.png';
import Image6 from './images/type6.png';

function Second() {
  return (
    <div className="second-container">
      <div className="second-heading">
        <h1>Kalite ve Süreç Yönetimi</h1>
        <p>
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </p>
      </div>
      <div className="second-types-cont">

      <div className="type1 ch">
      <img class="title-image" src={Image1} alt="type1"/>
      <h2>Döküman Analizi</h2>
      <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
      </div>

      <div className="type2 ch">
      <img class="title-image" src={Image2} alt="type1"/>
      <h2>Kabul ve Değerlendirme</h2>
      <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
      </div>

      <div className="type3 ch">
      <img class="title-image" src={Image3} alt="type1"/>
      <h2>İş Kuralları Analizi</h2>
      <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum</p>
      </div>

      <div className="type4 ch">
      <img class="title-image" src={Image4} alt="type1"/>
      <h2>Akış Diyagramları</h2>
      <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
      </div>

      <div className="type5 ch">
      <img class="title-image" src={Image5} alt="type1"/>
      <h2>Paydaş Analizi</h2>
      <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
      </div>

      <div className="type6 ch">
      <img class="title-image" src={Image6} alt="type1"/>
      <h2>Prototipleme</h2>
      <p>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</p>
      </div>


      </div>
     
    </div>
  );
}

export default Second;
