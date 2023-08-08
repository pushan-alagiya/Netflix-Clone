import "./Footer.css";
import Lang from "../language/Lang";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-line">
        Questions? Call <div className="number">000-800-919-1694</div>
      </div>
      <div className="footer-links flex">
        <div className="column-one">
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Media Center</a>
            </li>
            <li>
              <a href="/">Ways to Watch</a>
            </li>
            <li>
              <a href="/">Cookie Preference</a>
            </li>
            <li>
              <a href="/">Speed Test</a>
            </li>
          </ul>
        </div>
        <div className="column two">
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Media Center</a>
            </li>
            <li>
              <a href="/">Ways to Watch</a>
            </li>
            <li>
              <a href="/">Cookie Preference</a>
            </li>
            <li>
              <a href="/">Speed Test</a>
            </li>
          </ul>
        </div>
        <div className="column-three">
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Media Center</a>
            </li>
            <li>
              <a href="/">Ways to Watch</a>
            </li>
            <li>
              <a href="/">Cookie Preference</a>
            </li>
            <li>
              <a href="/">Speed Test</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="language-selector">
        <Lang></Lang>
      </div>
      <div className="last-line">Netflix India</div>
    </div>
  );
};

export default Footer;
