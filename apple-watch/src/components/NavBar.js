import { NavStyled, Logo } from "../styles";

//logo
import logo from "../images/logo.png";
function NavBar() {
  return (
    <NavStyled>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <Logo src={logo} alt="logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a onClick={() => window.scroll(0, 1000)}>About</a>
            {/* <a className="nav-item nav-link" href="#">
              Features
            </a> */}
          </div>
        </div>
      </nav>
    </NavStyled>
  );
}

export default NavBar;
