import "./sidebar.css";

//import img
import instagram from "./icon/instagram.png";
import facebook from "./icon/facebook.png";
import youtube from "./icon/youtube.png";
import twitter from "./icon/twitter.png";
import pinterest from "./icon/pinteres.png";

function sidebar() {
  return (
    <div className="hobbie">
      <h1>My pages:</h1>
      <ul>
        <li>
          <a href="https://www.instagram.com/eugene.kalichak/" target="blanc">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/eugene.kalichak.33/" target="blanc">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@DOU_youtube" target="blanc">
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={pinterest} alt="pinterest" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default sidebar;
