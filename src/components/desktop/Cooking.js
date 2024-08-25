import logo from "../../images/k (1).svg";
import "./Cooking.css";

function Cooking() {
  return (
    <div>
      <img className="logo-desktop-body-cook" src={logo} alt="Kevintcfit" />
      <p className="cooking-p">Estamos cocinando tu rutina...</p>
      <div className="footer-cook">
        <ul className="social-links-cook">
          <li>
            <a
              href="https://www.youtube.com/@kevintcfit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@kevin_tc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tik Tok
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kevintcfit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cooking;
