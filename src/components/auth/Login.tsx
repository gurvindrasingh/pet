import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    // TODO: Replace with real login logic
    localStorage.setItem("user", "true");

    // Redirect to the page user came from
    navigate(from, { replace: true });
  };

  return <button onClick={handleLogin}>Login</button>;
}
