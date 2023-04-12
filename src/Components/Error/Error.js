import "./Error.css";
import Logo from "../../Images/nytLogo.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="logo-button-container">
        <Link to="/">
          <img alt="Click to return home" className="x-button" src={Logo}></img>
        </Link>
      </div>
      <img alt="A sad cauliflower" src={sadCauli} className="error-image" />
      <h3 className="error-component-message">
        404... Oh no! <br /> Please click the logo to go back!
      </h3>
    </section>
  );
};

export default Error;