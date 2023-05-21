import "./mainOne.css";

//import img
import iconOne from "./icon//Periscope.png";
import gmail from "./icon/Gmail.png";
import phone from "./icon/phone.png";
import gitHub from "./icon/github_icon.png";
import linkedIn from "./icon/linkedIn.png";
import instagram from "./icon/intagram.png";

function mainOne() {
  return (
    <div className="wrapper">
      <div className="mainOne">
        <h1>Eugene Kalichak</h1>
        <ul>
          <li className="pure">FRONT-END DEVELOPER</li>
          <li className="gray">CONTACT</li>
        </ul>
      </div>
      <div className="mainOneLink">
        <ul>
          <li>
            <img src={iconOne} alt="naw" />
            <p>Rivne, Ukraine</p>
          </li>
          <li>
            <img src={gmail} alt="gmail" />
            <p>eugene.kalichak@gmail.com</p>
          </li>
          <li>
            <img src={phone} alt="phone" />
            <p>+380673746809</p>
          </li>
        </ul>
        <ul className="mainOneLinkOne">
          <li>
            <img src={gitHub} alt="gitHub" />
            <a href="https://github.com/ek-hb">github.com/ek-hb</a>
          </li>
          <li>
            <img src={linkedIn} alt="linkedIn" />
            <a href="https://www.linkedin.com/in/eugene-kalichak-a52012269">
              Eugene Kalichak
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default mainOne;
