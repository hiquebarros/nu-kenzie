import "./styles.css";
import logo from "../../img/logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <img className="header-img" src={logo}></img>
        <button className="header-button">
          <h3>Início</h3>
        </button>
      </div>
    </div>
  );
}
export default Header;
