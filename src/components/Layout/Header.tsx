import { NavLink } from "react-router-dom";

export default function Header() {
  const logo: string = "./src/assets/images/logo.png";
  return (
    <>
      <header className="bg-white">
        <nav>
          <div>
            <img src={logo} />
          </div>
          <div className="flex">
            <NavLink to="/">Search Sitter</NavLink>
            <NavLink to="/">Become a Sitter</NavLink>
            <NavLink to="/">Our Services</NavLink>
          </div>
          <div className="flex">
            <NavLink to="/register">Sign Up</NavLink>
            <NavLink to="/login">Sign In</NavLink>
            <NavLink to="/">Help</NavLink>
            <NavLink to="/">Language</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
