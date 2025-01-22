import { useEffect } from "react";
import Container from "../components/ui/Container";
import { Outlet } from "react-router";

function Layout() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "purple");
  }, []);
  return (
    <Container className="auth-box">
      <Outlet />
    </Container>
  );
}
export default Layout;
