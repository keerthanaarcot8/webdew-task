import './styles.css'
import logo from '../../assets/images/logo.jpg'

export const Header = () => {
    return (
      <header className="header sticky-header">
        <div className="logo">
          <div>
          <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <div>Dummy Logo</div>
        </div>
        <nav className="top-navigation">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact Us</li>
          </ul>
        </nav>
      </header>
    );
  };