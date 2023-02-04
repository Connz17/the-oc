import "./LandingPage.scss";
import sunflower from "../../Images/pngegg.png"
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div>
        <div className="landing-title">
            <h1>&#128420;</h1>
            <h1>"Get weird or go home"</h1>
            <h1>&#128155;</h1>
        </div>
        <div>
            <h2 className="heart-duo">&#128153;&#129505;</h2>
        </div>
        <Link to="/home">
            <img className="landing-button" src={sunflower} alt="entry button" />
        </Link>
    </div>
  )
}

export default LandingPage