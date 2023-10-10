

function Contactus() {
  return (
    <>
      {/* Contact Us Section */}
      <section>
        <img className="dsk-logo" src="image/ff.jpg" width="20%" alt="Desktop Logo" />
        <img className="mbl-logo" src="https://www.firstfiddle.in/assets/images/contact-mob.png" width="100%" height="550px" alt="Mobile Logo" />
        <h1 className="text-center text-black" style={{ position: 'absolute', top: '36%', left: '0', right: '0', letterSpacing: '4px', fontFamily: 'prague', fontSize: '60px' }}>CONTACT US</h1>
      </section>

      {/* Login Form Section */}
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card" style={{ marginTop: '50px' }}>
                  <h3 className="text-dark text-center">SEND US MESSAGE</h3>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <input type="name" name="" className="form-control" placeholder="NAME" />
                      </div>

                      <div className="form-group">
                        <input type="name" name="" className="form-control" placeholder="MOBILE" />
                      </div>

                      <div className="form-group">
                        <input type="name" name="" className="form-control" placeholder="E-MAIL" />
                      </div>

                      <div className="form-group">
                        <input type="name" name="" className="form-control" placeholder="MESSAGE" />
                      </div>

                      <button className="btn btn-warning">SUBMIT</button>
                    </form>
                  </div>
                  {/* card-body ends */}
                </div>
                {/* card div ends */}
              </div>

              <div className="col-md-6">
                <h3 className="text-dark" style={{ marginTop: '50px' }}>CONTACT INFO</h3>
                <p style={{ color: '#fbaa1a', fontWeight: 'bolder' }}>Address</p>
                <p style={{ color: 'black', position: 'relative', bottom: '20px' }}>B6/22, 1st Floor, Safdarjung Enclave, New <br />Delhi 110029, INDIA</p>
                <p style={{ color: '#fbaa1a', fontWeight: 'bolder', position: 'relative', bottom: '13px' }}>HR Enquiry</p>
                <p style={{ color: 'black', position: 'relative', bottom: '30px' }}>
                  Mobile: <b style={{ color: '#fbaa1a' }}>+919999796366</b> <br />
                  Email: <b style={{ color: '#fbaa1a' }}>careers@firstfiddle.in</b>
                </p>
                <p style={{ color: '#fbaa1a', fontWeight: 'bolder' }}>Franchise Enquiry</p>
                <p style={{ color: 'black', position: 'relative', bottom: '20px' }}>
                  Mobile: <b style={{ color: '#fbaa1a' }}>+919999796366</b> <br />
                  Email: <b style={{ color: '#fbaa1a' }}>careers@firstfiddle.in</b>
                </p>
                <p style={{ color: '#fbaa1a', fontWeight: 'bolder', position: 'relative', bottom: '15px' }}>Other Enquiry</p>
                <p style={{ color: 'black', position: 'relative', bottom: '35px' }}>
                  Mobile: <b style={{ color: '#fbaa1a' }}>+919999796366</b> <br />
                  Email: <b style={{ color: '#fbaa1a' }}>careers@firstfiddle.in</b>
                </p>
              </div>
            </div>
            {/* div row ends */}
          </div>
          {/* div container ends */}
        </div>
        {/* div container fluid ends */}
      </section>
    </>
  );
}

export default Contactus;
