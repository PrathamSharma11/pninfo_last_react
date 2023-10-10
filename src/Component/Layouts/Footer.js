function Footer() {
  return (
    <>
      {/* section footer starts */}
      <section>
        {/* div container-fluid starts */}
        <div className="container-fluid foot">
          {/* div container starts */}
          <div className="container">
            {/* row div starts */}
            <div className="row">
              <div className="col-md-5">
                <img src="image/ff.jpg" style={{ marginTop: '60px', width: '300px' }} alt="Company Logo" />
              </div>

              <div className="col-md-7">
                <h1 className="footer7" style={{ color: 'white' }}>
                  <b style={{ color: '#fbaa1a' }}>CONTACT </b> US
                </h1>
                <p style={{ color: 'white' }}>
                  We're a team focusing on redefining the way the hospitality industry works by bringing in concept-based restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and revolutionizing the F & B industry!
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <p style={{ color: '#fbaa1a', fontWeight: 'bolder' }}>Address</p>
                    <p style={{ color: 'white', position: 'relative', bottom: '20px' }}>
                      B6/22, 1st Floor, Safdarjung Enclave, New <br />Delhi 110029, INDIA
                    </p>
                    <p style={{ color: '#fbaa1a', fontWeight: 'bolder', position: 'relative', bottom: '13px' }}>HR Enquiry</p>
                    <p style={{ color: 'white', position: 'relative', bottom: '30px' }}>
                      Mobile: <b style={{ color: '#fbaa1a' }}>+919999796366 </b> <br />Email: <b style={{ color: '#fbaa1a' }}>careers@firstfiddle.in</b>
                    </p>
                  </div>

                  <div className="col-md-6">
                    <p style={{ color: '#fbaa1a', fontWeight: 'bolder' }}>Franchise Enquiry</p>
                    <p style={{ color: 'white', position: 'relative', bottom: '20px' }}>
                      Mobile: <b style={{ color: '#fbaa1a' }}>+919999796366 </b> <br />Email: <b style={{ color: '#fbaa1a' }}>careers@firstfiddle.in</b>
                    </p>

                    <p style={{ color: '#fbaa1a', fontWeight: 'bolder', position: 'relative', bottom: '15px' }}>Other Enquiry</p>
                    <p style={{ color: 'white', position: 'relative', bottom: '35px' }}>
                      Mobile: <b style={{ color: '#fbaa1a' }}>+919999796366 </b> <br />Email: <b style={{ color: '#fbaa1a' }}>careers@firstfiddle.in</b>
                    </p>
                  </div>
                </div>
                {/* 1st row div ends */}
                <div className="row">
                  <div className="col-md-6">
                    <i className="fa fa-facebook-square" style={{ fontSize: '40px', color: '#fbaa1a', position: 'relative', bottom: '30px' }}></i>&nbsp;
                    <i className="fa fa-linkedin-square" style={{ fontSize: '40px', color: '#fbaa1a', position: 'relative', bottom: '30px' }}></i>&nbsp;
                    <i className="fa fa-instagram" style={{ fontSize: '40px', color: '#fbaa1a', position: 'relative', bottom: '30px' }}></i>
                  </div>

                  <div className="col-md-6">

                  </div>
                </div>
                {/* 2nd row div ends */}
              </div>
              {/* div col-md-7 ends */}
            </div>
            {/* row div ends */}
          </div>
          {/* div container ends */}
        </div>
        {/* div container-fluid ends */}
      </section>
      {/* section footer ends */}

      {/* section subfooter starts */}
      <section>
        <div className="container-fluid last">
          <p style={{ color: 'white', textAlign: 'center' }}>
            PRIVACY POLICY | TERMS AND CONDITIONS | BLOG <br />
            COPYRIGHT © 2019 FIRST FIDDLE F&B PRIVATE LIMITED
          </p>
        </div>
      </section>
      {/* section subfooter ends */}
    </>
  );
}

export default Footer;




