import "./LandingPage.scss";
import logo from "../../Images/OC_logo (linked).png";
import sunflower from "../../Images/pngegg.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <img className="landing-logo" src={logo} alt="" /> <br />
      <div className="landing-title">
        <h1>&#128420;</h1>
        <h1>"Get weird or go home"</h1>
        <h1>&#128155;</h1>
      </div>{" "}
      <br />
      <Link to="/home">
        <img className="landing-button" src={sunflower} alt="entry button" />
      </Link>
      <br />
      <div className="heart-duo">
        <h2 className="heart-duo__image">&#128153;</h2>
        <h2 className="heart-duo__image">&#129505;</h2>
      </div>
    </div>
  );
};

export default LandingPage;
