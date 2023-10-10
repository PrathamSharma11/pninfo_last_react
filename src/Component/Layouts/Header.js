import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top a">
        {/* div container starts */}
        <div className="container">
          <Link to="/"  className="navbar-brand">
            <img className="dsk-logo" src="image/ff.jpg" style={{ width: '65px' }} alt="Desktop Logo" />
            <img className="mbl-logo" src="image/ff.jpg" alt="Mobile Logo" />
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#a">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="a">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to="brands" className="nav-link">BRANDS</Link>
              </li>
              <li className="nav-item">
                <Link to="ourteam" className="nav-link">OUR TEAM</Link>
              </li>
              <li className="nav-item">
                <Link to="contactus" className="nav-link">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">FRANCHISE</Link>
              </li>
              <li className="nav-item">
                <Link style={{ border: '2px solid', borderColor: '#fbab29', borderWidth: 'thin' }} to="/" className="nav-link">PRESS RELEASE</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* div container end */}
      </nav>
    </>
  );
}

export default Header;




