import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <NavLink to="/">Home1</NavLink>
        <NavLink to="/login">Login3</NavLink>
        <NavLink to="/register">Register2</NavLink>
      </nav>
    </>
  );
}
