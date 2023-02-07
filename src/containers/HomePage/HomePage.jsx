import verse from "../../Images/verse galaxy.jpg";
//import verse from "../../Images/verse compass.jpg";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      {" "}
      <br />
      <h2 className="home_intro">
        Olivia Estella Ann Brown. Ever since December the 23rd, and even more so
        since January 12th, you have brightened up my day to no end. You have
        brought joy, laughter, amusement and happiness each and every day. Even
        when you're not trying, you still look gorgeous. There is a quote that
        goes “When you discover something that brings joy, care enough about
        yourself to make room for it in your life.” I want to make room for you,
        not just for a moment in my life, but for the rest of it... Now when I
        think about my future, all I see is you in it.
      </h2>
      <div className="home__verse">
        <img className="verse__image" src={verse} alt=""></img>
      </div>
      <br />
      <h1 className="home_outro">
        &#128420; I want you to always be my honeybun...so from today...will you
        be my girlfriend? &#128155;
      </h1>
    </div>
  );
};

export default HomePage;
