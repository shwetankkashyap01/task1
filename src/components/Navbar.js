import React from "react";
import "./Navbar.css";
import { Button } from '@mui/material';

function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <div className="empty-space"></div> {/* Empty space on the left side */}
        <div className="menu-links">
          <ul>
            <li>
              <a href="/">Çözüm ve Hizmetler</a>
            </li>

            <li>
              <a href="/">Ürünler</a>
            </li>

            <li>
              <a href="/">Teknolojiler</a>
            </li>

            <li>
              <a href="/">İnsan Kaynakları</a>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <Button  variant='contained' color='error'>İletişim</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
