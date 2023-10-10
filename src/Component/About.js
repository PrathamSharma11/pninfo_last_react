// function About(){
//     return(
//         <>
//             <h1>hello about</h1>
//             <input/>
//         </>
//     )
// }
// export default About;

function About(){
    return(
        <>
         {/* Image Section */}
      <section>
        <img className="img" src="image/aboutff.jpg" width="100%" alt="About First Fiddle" />
      </section>

      {/* Our Story Section */}
      <section>
        <div className="container-fluid">
          <div className="container">
            <h2 className="ro">
              OUR STORY <b style={{ color: '#fbaa1a' }}>SINCE 1999 </b>
            </h2>
            <div className="row">
              <div className="col-md-7">
                <p className="p">
                  First Fiddle Restaurants, formerly known as The Lazeez Affaire Group, was conceived in the year 1999 by Priyank Sukhija and Y.P. Ashok. The company is a renowned innovator and leader in the hospitality industry. Opened in the year 1999, the first outlet by the company- Lazeez Affaire, popularized the concept of fine dining in India. Following its success, places like Warehouse Cafe followed storming Delhi’s nightlife. Eventually, ‘The Flying Saucer Cafe’ captivated the metropolis with the famous Sufi nights. Other well-known brands include ‘Lord Of The Drinks’, 'Dragonfly Experience', 'Plum by Bentchair', ‘JLWA’, ‘Tamasha’, ‘Teddy Boy’, ‘Openhouse Cafe’, and others.
                </p>
                <p className="p">
                  The company is dedicated to being a game changer in the F&B industry with the introduction of ‘concept’ restaurants. The company is committed to catering to the ever-changing cosmopolitan taste of its customers & customer satisfaction is an utmost priority. The restaurants are spread all over India in major metropolitan cities like New Delhi, Mumbai, Pune, Lucknow and more. Our major brands include ‘Lord of the Drinks’, 'Dragonfly Experience', 'Plum by Bentchair', ‘Tamasha’, ‘The FlyingSaucer Cafe’, ‘JLWA’ – to name a few. Plans for global expansion are underway.
                </p>
              </div>
              <div className="col-md-5">
                <img src="image/fb.jpg" width="300px" height="500px" alt="First Fiddle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Changer Section */}
      <section>
        <div className="container-fluid tgc">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h1 className="tgc2">THE GAME CHANGER</h1>
                <p style={{ lineHeight: '40px', letterSpacing: '1px', color: 'black', marginBottom: '102px', fontSize: '15px' }}>
                  The company is dedicated to being a game changer in the F&B industry with the introduction of ‘concept’ restaurants. The company is committed to catering to the ever-changing cosmopolitan taste of its customers & customer satisfaction is an utmost priority.
                </p>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Priyank Section */}
      <section>
        <div className="container-fluid">
          <div className="container">
            <h2 className="tpr">THE PROLIFIC <b style={{ color: '#fbaa1a' }}>RESTAURANTEUR </b></h2>
            <div className="row">
              <div className="col-md-4">
                <img src= "image/priyank.jpg" height="300px" width="300px" alt="Priyank Sukhija" />
              </div>
              <div className="col-md-8">
                <p className="tpr2">
                  30+ restaurants in 20 years, that’s no small attainment, but the prolific restaurateur Priyank Sukhija has done it, starting from the very young age of 19. Born in a family of lawyers, he became the only businessman in the family, opened the fine-dining restaurant Lazeez Affaire at Malcha Marg, in 1999. Beginning his journey with Lazeez Affaire, he created the most talked about brands in the hospitality industry- Lord of the Drinks, Plum by Bent Chair, Dragonfly Experience, JLWA, Tamasha, The Flying Saucer Cafe and many more. Coming from an era where people either opted for fine dining or clubbing, Priyank has been a true pioneer in building and popularizing the casual dining and successful in bringing a wave of innovation in the restaurant industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section>
        <div className="container-fluid">
          <div className="container">
            <h2 className="join">JOIN <b style={{ color: '#fbaa1a' }}> OUR FAMILY </b></h2>
            <div className="row">
              <div className="col-md-8">
                <p className="join2">
                  At First Fiddle Restaurants, we leave no stone unturned to provide the most desirable experiences across markets and restaurants. Serving over five lakhs of customers monthly with 20+ brands and 35+ restaurants, our brands like Plum by Bent Chair, Dragonfly Experience, Tamasha, Daddy, JLWA, and many more have revolutionized the experience of dining & nightlife for everyone with its outstanding concepts. We're now foraying into the franchising model, and franchise with First Fiddle Restaurants provides you with an already existing large customer base with the added advantage of nationwide recognition.
                </p>
                <a href="about" className="btn btn-warning">Franchise With Us</a>
              </div>
              <div className="col-md-4">
                <img src="image/prim.jpg" height="300px" alt="Join Our Family" />
              </div>
            </div>
          </div>
        </div>
      </section>



        </>
    )
}
export default About;