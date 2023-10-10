

function Ourteam() {
  return (
    <>
      {/* Our Team Section */}
      <section>
        <div className="container-fluid bd">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h1 className="ourteam">MEET THE TEAM</h1>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Priyank Sukhija Section */}
      <section>
        <div className="container-fluid">
          <div className="container" style={{ marginTop: '50px' }}>
            <div className="row">
              <div className="col-md-6">
                <img className="priimage" src="image/priyank.jpg" height="400px" alt="Priyank Sukhija" />
              </div>
              <div className="col-md-6">
                <h2 className="pri">Priyank Sukhija</h2>
                <h4>C.E.O. & M.D.</h4>
                <br />
                <br />
                <p style={{ textAlign: 'justify', fontSize: 'letter-spacing: 1px', wordSpacing: '2px', fontFamily: 'montserrat, sans-serif' }}>
                  Priyank Sukhija is a prolific restauranteur, industrious to the core and a true innovator! A simple man, he doesn’t sweat of success. An amiable personality, he is zealous towards what he does. Born in a family of educated lawyers, Priyank has been the captain of his own boat. The only businessman in the family, he opened the fine-dining restaurant Lazeez Affaire at Malcha Marg, with support from his parents at the young age of 19. The success of Lazeez Affaire prompted him to take Delhi’s existing culinary experience and transform it into something no one could foresee. Priyank Sukhija is a prolific restaurateur, industrious to the core and a true innovator! A simple man, he doesn’t sweat of success.
                </p>
                <a href="about" className="btn btn-warning">Read More</a>
                <div className="row">
                  <div className="col-md-6">
                    <i className="fa fa-facebook-square" style={{ fontSize: '40px', color: '#fbaa1a', position: 'relative', bottom: '1px' }}></i>&nbsp;
                    <i className="fa fa-linkedin-square" style={{ fontSize: '40px', color: '#fbaa1a', position: 'relative', bottom: '1px' }}></i>&nbsp;
                    <i className="fa fa-instagram" style={{ fontSize: '40px', color: '#fbaa1a', position: 'relative', bottom: '1px' }}></i>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd row div end */}
          </div>
          {/* 1st row div end */}
        </div>
        {/* col md 6 div end */}
      </section>

      {/* Image Section */}
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/YPAshok.jpg" width="300px" alt="Y.P.ASHOK" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/Gaurav-Gupta.jpg" width="300px" alt="Gaurav Gupta" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/B.R.-Sachdeva.jpg" width="300px" alt="B.R. Sachdeva" />
              </div>
            </div>
            {/* Row div ends */}
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/anuj.png" width="300px" alt="Anuj" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/Dheeraj-Sachdeva.jpg" width="300px" alt="Dheeraj Sachdeva" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/SachinBhatt.jpg" width="300px" alt="Sachin Bhatt" />
              </div>
            </div>
            {/* Row div ends */}
            <div className="row" style={{ marginTop: '50px' }}>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/Nidhi-sharma.jpg" width="300px" alt="Nidhi Sharma" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/Himmat-Rautela.jpg" width="300px" alt="Himmat Rautela" />&nbsp;
              </div>
              <div className="col-md-4">
                <img src="https://app.firstfiddle.in/images/ff_meet_team/Sagar-Bajaj.jpg" width="300px" alt="Sagar Bajaj" />
              </div>
            </div>
            {/* Row div ends */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourteam;
