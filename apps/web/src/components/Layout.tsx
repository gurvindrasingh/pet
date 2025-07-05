import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Box>
      <Header />
      <Box p={3} minHeight="80vh">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
