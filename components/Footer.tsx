import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="span4">
            <div className="widget">
              <h5 className="widgetheading">Media Sosial Kami</h5>
              <ul className="link-list">
                <li>
                  <a
                    href="https://wa.me/62882001425081?text=Hallo Natha Konstruksi"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-phone" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kontruksikandangayam"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61557044876692"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="span4">
            <div className="widget">
              <h5 className="widgetheading">Kontak Kami</h5>
              <address>
                <strong>Natha konstruksi Inc.</strong>
                <br />
                Tasikmalaya, Jawa Barat
              </address>
              <p>
                <i className="icon-phone" /> (+62) 882-0014-25081
                <br />
                <i className="icon-envelope-alt" /> kontruksiayam93@gmail.com
              </p>
            </div>
          </div>
          <div className="span4">
            <div className="widget">
              <h5 className="widgetheading">Subscribe newsletter</h5>
              <p>
                Keep updated for new releases and freebies. Enter your e-mail
                and subscribe to our newsletter.
              </p>
              <form className="subscribe">
                <div className="input-append">
                  <input
                    className="span2"
                    id="appendedInputButton"
                    type="text"
                  />
                  <button className="btn btn-theme" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="span6">
              <div className="copyright">
                <p>
                  <span>&copy; Natha Konstruksi. All right reserved</span>
                </p>
              </div>
            </div>

            <div className="span6">
              <div className="credits">
                Designed by <a href="#">Natha Dev.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
