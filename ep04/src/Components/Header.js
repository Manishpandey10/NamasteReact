import { LOGO_URL } from "../Utils/constants";

export const Header = () => {
    return (
      <div className="header" style={{ backgroundColor: "#E1F5FE" }}>
        <img
          className="logo"
          src={LOGO_URL}
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;