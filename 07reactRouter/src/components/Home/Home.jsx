import React from "react";
import "./Home.css";
import manviImg from "./manvi.jpg";
import bgImg from "./back.jpg";
import ScrollToTop from '../../ScrollToTop';
function Home() {
  const handleClick = (e) => {
    const site = e.target.innerText;
    if (site === "LinkedIn") {
      //   window.location = "https://www.linkedin.com/in/manvichaddha/";
      window.open("https://www.linkedin.com/in/manvichaddha/", "_blank");
    } else {
      // window.location = "https://www.github/com/manvi0308";
      window.open("https://www.github.com/manvi0308", "_blank");
    }
  };
  return (
    <>
      <div className="home">
        <img src="./back.jpg" alt="" />
        <div className="manviDesc">
          <h1>Hello World !!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            explicabo tenetur blanditiis labore quaerat eveniet quisquam fugit.
            Deleniti deserunt accusamus rerum magnam voluptatum! Distinctio
            voluptate debitis laudantium unde error numquam.
          </p>
          <button onClick={handleClick}>LinkedIn</button>
          <button onClick={handleClick}>GitHub</button>
        </div>

        <div className="manviPhoto">
          <img src={manviImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
