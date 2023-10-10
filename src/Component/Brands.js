

function Brands() {
  return (
    <>
      {/* Brands Section */}
      <section>
        <div className="container-fluid bd">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h1 className="brands">BRANDS</h1>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-4">
                <img src="image/lord.jpg" width="300px" alt="Lord of the Drinks" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/plum.jpg" width="300px" alt="Plum" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/jlwa.jpg" width="300px" alt="JLWA" />
              </div>
            </div>
            {/* Row div ends */}
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-4">
                <img src="image/dragon.jpg" width="300px" alt="Dragonfly Experience" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/saucer.jpg" width="300px" alt="The Flying Saucer Cafe" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/rocky.jpg" width="300px" alt="Rocky Star Cocktail Bar" />
              </div>
            </div>
            {/* Row div ends */}
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-4">
                <img src="image/tamasha.jpg" width="300px" alt="Tamasha" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/teddyboy.jpg" width="300px" alt="Teddy Boy" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/tla.jpg" width="300px" alt="The Lazy Artist (TLA)" />
              </div>
            </div>
            {/* Row div ends */}
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-4">
                <img src="image/warehouse.jpg" width="300px" alt="Warehouse Cafe" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/openhouse.jpg" width="300px" alt="Openhouse Cafe" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="image/rpm.jpg" width="300px" alt="RPM - Rock & Pasta Magia" />
              </div>
            </div>
            {/* Row div ends */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Brands;
