import "./styles.css";
import right from "../../img/Group 262.svg";
import left from "../../img/Nu Kenzie.svg"

const Landing = ({setLanding}) => {
  return (
  <div className="container">
    <div className="container-div1">
      <img className="left" src={left} />
      <h1>Centralize o controle das suas finanças</h1>
      <span>de forma rápida e segura</span>
      <button className="start" onClick={() => setLanding(false)}>Iniciar</button>
    </div>
    <div>
     <img className="right" src={right} />
    </div>
  </div>
  )
};

export default Landing;
