import info from "../pages/info.png";
import caution from "../pages/caution.png";
import "../pages/style.css";

function Algoritmusok() {
  return (
    <div>
      <h1>Algoritmusok</h1>
      <div className="bluebox">
        <div className="topbluebar">
          <img src={info} alt="info" />
          <p>
            <b>Információ</b>
          </p>
        </div>
        <div className="bottombluebar">
          <p>
            Az alábbi feladatokban különböző algoritmusokat kell elkészíteni.
            Minden algoritmushoz tartozik egy kiinduló Python kód, amely
            tartalmaz <code>unittest</code> teszteket is.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="orangebox">
        <div className="toporangebar">
          <img src={caution} alt="caution" />
          <p>
            <b>Idő -és memóriakorlátozások</b>
          </p>
        </div>
        <div className="bottomorangebar">
          <p>
            A feladatok megoldásánál figyelj a megadott idő- és
            memóriakorlátozásokra!
          </p>
          <ul>
            <li>Időlimit: 1.00 sec</li>
            <li>Memória limit: 512 MB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Algoritmusok;
