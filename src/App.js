import ProductList from "./component/ProductList";
import dataShoes from "./Data/data.json";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills justify-content-center"
            style={{ minHeight: "800px" }}
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Home
            </a>
            <a
              className="nav-link"
              id="v-pills-shop-tab"
              data-toggle="pill"
              href="#shop"
              role="tab"
              aria-controls="v-pills-shop"
              aria-selected="false"
            >
              Shop
            </a>
          </div>
        </div>
        <div className="product-list col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProductList arrProduct={dataShoes} />
            </div>
            <div
              className="tab-pane fade"
              id="shop"
              role="tabpanel"
              aria-labelledby="v-pills-shop-tab"
            >
              Shop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
