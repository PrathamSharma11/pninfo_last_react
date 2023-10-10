// function Home(){
//     return(
//         <div>
//             <h1>hello home</h1>
            
//         </div>
//     )
// }
// export default Home;



function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="carousel slide" data-ride="carousel" id="myslide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="image/slid1.jpg" alt="First slide" width="100%" height="400px" />
              <div className="carousel-caption">
                <h1>PLUMB BY BENT CHAIR</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img src="image/slid2.jpg" alt="Second slide" width="100%" height="400px" />
              <div className="carousel-caption">
                <h1>DRAGON FLY EXPERIENCE</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img src="image/slid3.jpg" alt="Third slide" width="100%" height="400px" />
              <div className="carousel-caption">
                <h1>JLWA</h1>
              </div>
            </div>
          </div>
          <ul className="carousel-indicators">
            <li data-target="#myslide" data-slide-to="0" className="active"></li>
            <li data-target="#myslide" data-slide-to="1" className=""></li>
            <li data-target="#myslide" data-slide-to="2" className=""></li>
          </ul>
          <a href="#myslide" data-slide="prev" className="carousel-control-prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a href="#myslide" data-slide="next" className="carousel-control-next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
           {/* Welcome Section */}
           <section>
        <div className="container-fluid">
          <div className="container">
            <h2 className="text-center welcome">
              WELCOME TO <b style={{ color: '#fbaa1a' }}>FIRST FIDDLE </b>
            </h2>
            <br />

            <div className="row">
              <div className="col-md-7">
                <p className="text-justify p">
                  First Fiddle Restaurants, one of India’s most prominent F&B companies in the casual dining sector, is headed by Priyank Sukhija. From Lazeez Affair, the first brand conceived in 1999 to Lord of The Drinks, Dragonfly Experience, Diablo, and Plum By Bent Chair, our latest ventures, we have brought a wave of innovation in the hospitality industry throughout. Being one of India’s largest restaurant chains with over 30+ restaurants, now we are open to franchising routes for expansion and soon hitting the international grounds too.
                </p>
                <br />

                <a href="about" className="btn btn-warning">
                  Find Out More
                </a>
              </div>

              <div className="col-md-5">
                <img src="image/fb.jpg" width="295px" alt="First Fiddle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section>
        <div className="container-fluid bg-dark c" style={{ marginTop: '150px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-8">
                <h1 className="mm" style={{ textAlign: 'center', color: 'white', fontSize: '60px' }}>
                  MEDIA MENTIONS
                </h1>
                <p style={{ color: 'white', letterSpacing: '1px', lineHeight: '40px', marginLeft: '50px' }}>
                  We are making headlines since 1999 for having upmarket conceptualized places, experimental gastronomic affairs, and exotic mixology. From the heart of the country, we are now in the hearts of people in our country!
                </p>
                <br />
                <center>
                  <a className="btn btn-warning" href="about">
                    KNOW MORE
                  </a>
                </center>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section>
        <div className="container-fluid">
          <div className="container">
            <h2 className="ex">
              EXPLORE <b style={{ color: '#fbaa1a' }}>OUR BRANDS</b>
            </h2>
            <br /> <br />

            <div className="row">
              <div className="col-md-3">
                <img src="image/openhouse.jpg" width="250px" alt="Open House" />
              </div>

              <div className="col-md-3">
                <img src="image/rocky.jpg" width="250px" alt="Rocky Star" />
              </div>

              <div className="col-md-3">
                <img src="image/saucer.jpg"width="250px" alt="Flying Saucer" />
              </div>

              <div className="col-md-3">
                <img src="image/jlwa.jpg" width="250px" alt="Daddy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section>
        <div className="container-fluid bg-dark visbg">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h1 className="vis" style={{ color: 'white', fontSize: '60px', textAlign: 'center' }}>
                  VISIT OUR OUTLETS
                </h1>
                <p className="visp">
                  From Indian food to International food and scrumptious fusion eateries, we bring to you the best of both worlds with magical events happening every other night! We're here with the perfect concept resto-bars, which will lift your mundane lives. Have a glance right away!
                </p>
                <br />
                <center>
                  <a className="btn btn-warning" href="about">
                    KNOW MORE
                  </a>
                </center>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br />
    </>



);
}



export default Home;
