import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/layout.css";

function Layout() {
  return (
    <div>
        <div className="container container-custom">
        <div className="row">
            <div className="col">Column1</div>
            <div className="col">Column2</div>
            <div className="col">Column3</div>
        </div>
    </div>

    <div className="container container-blue">
        <div className="row">
            <div className="col bg-primary text-light">Column1</div>
            <div className="col bg-primary text-light">Column2</div>
            <div className="col bg-primary text-light">Column3</div>
        </div>
    </div>

    <div className="container container-scroll">
        <div className="row">
            <div className="col-lg m-2 border">Column1</div>
            <div className="col-lg m-2 border">Column2</div>
            <div className="col-lg m-2 border">Column3</div>
        </div>
        <div className="row">
            <div className="col-xl m-2 border">Column4</div>
            <div className="col-xl m-3 border">Column5</div>
            <div className="col-xl m-4 border">Column6</div>
        </div>
    </div>

    <div className="container container-dark">
        <div className="row row-danger">
            <div className="col-md col-primary m-2">Column1</div>
            <div className="col-md col-success m-2">Column2</div>
            <div className="col-md col-primary m-2">Column3</div>
        </div>
        <div className="row row-warning">
            <div className="col-xl col-info m-2">Column4</div>
            <div className="col-xl col-success m-2">Column5</div>
            <div className="col-xl col-info m-2">Column6</div>
        </div>
    </div>
    </div>
  );
}

export default Layout;
