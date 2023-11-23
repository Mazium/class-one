import CompanyLogo from "./CompanyLogo";
import { Link } from "react-router-dom";

function Nav() {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
  };
  const navStyles = {
    display: "flex",
    gap: "10px",
  };
  return (
    <div style={styles}>
      <CompanyLogo />
      <ul style={navStyles}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
