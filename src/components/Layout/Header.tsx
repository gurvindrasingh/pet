import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <header className="bg-white">
        <nav>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-gray-700 text-sm">
              <NavLink
                to="/"
                className="hover:text-blue-950 hover:underline transition"
              >
                Search Sitter
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-blue-950 hover:underline transition"
              >
                Become a Sitter
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-blue-950 hover:underline transition"
              >
                Our Services
              </NavLink>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-gray-700 text-sm">
              <NavLink to="/register">Sign Up</NavLink>
              <NavLink to="/login">Sign In</NavLink>
              <NavLink to="/">Help</NavLink>
              <NavLink to="/">Language</NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
