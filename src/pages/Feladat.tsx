import kep from "./kep.jpg";
import "../pages/flexstyle.css";

function Feladat() {
  return (
    <div>
      <div className="pirosbox">
        <div className="szurkebox"></div>
        <div className="szurkebox"></div>
        <div className="szurkebox"></div>
        <div className="szurkebox"></div>
      </div>
      <div className="alsobox">
        <div className="kekbox">
          <div className="szurkebox"></div>
          <div className="szurkebox"></div>
          <div className="szurkebox"></div>
          <div className="szurkebox"></div>
          <div className="szurkebox"></div>
          <div className="szurkebox"></div>
        </div>
        <div className="zoldbox">
          <img src={kep} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feladat;
