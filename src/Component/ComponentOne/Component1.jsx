import "./Component1.css";
import avatar from "./img/avatar.png";

function Component1() {
  return (
    <div>
      <div className="forMe">
        <img src={avatar} alt="avatar" />
        <h2>About Me</h2>
        <p>
          My name is Eugene. I'm looking for Frontend developer positions in
          both website and mobile environments, and I'll be using the technical
          and problem-solving skills I've developed via studies and work. I
          value user experience and work toward a faultless user interface,
          which allows me to manage multiple tasks at once and demonstrates my
          commitment, organization, and adaptability even under pressure.{" "}
        </p>
      </div>
    </div>
  );
}
export default Component1;
