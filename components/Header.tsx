import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="span6">
              <p className="topcontact">
                <a
                  href="https://wa.me/62882001425081?text=Hallo Natha Konstruksi"
                  title="WhatsApp"
                  data-placement="bottom"
                  style={{ color: "#fff", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="icon-phone" /> (+62) 882-0014-25081
                  </span>
                </a>
              </p>
            </div>
            <div className="span6">
              <ul className="social-network">
                <li>
                  <a
                    href=""
                    data-placement="bottom"
                    title="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook icon-white" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kontruksikandangayam"
                    data-placement="bottom"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram icon-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row nomargin">
          <div className="span4">
            <div className="logo">
              <Link href="/">
                <img src="img/logo.png" alt="" />
                <span>Natha Konstruksi</span>
              </Link>
            </div>
          </div>
          <div className="span8">
            <div className="navbar navbar-static-top">
              <div className="navigation">
                <nav>
                  <ul className="nav topnav">
                    <li className="dropdown">
                      <Link href="/">
                        <i className="icon-home" /> Home
                      </Link>
                    </li>
                    <li className="dropdown">
                      <a href="#">Tentang Kami</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Layanan</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Kontak </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end navigation */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
