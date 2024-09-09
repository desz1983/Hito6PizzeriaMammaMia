import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function NavbarApp() {
  const { amount } = useContext(CartContext);
  const token = true;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand as={Link} to="/">
            Pizzería Mamma Mia!
          </Navbar.Brand>

          {/* Usar `as={Link}` para los botones */}
          <Button as={Link} to="/" className="btn-sm" variant="outline-light">
            🍕Home
          </Button>

          {token ? (
            <>
              <Button
                as={Link}
                to="/Profile"
                className="btn-sm"
                variant="outline-light"
              >
                🔓Profile
              </Button>

              <Button className="btn-sm" variant="outline-light" href="#Logout">
                🔒Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                as={Link}
                to="/LoginPage"
                className="btn-sm"
                variant="outline-light"
              >
                🔐Login
              </Button>
              <Button
                as={Link}
                to="/RegisterPage"
                className="btn-sm"
                variant="outline-light"
              >
                🔐Register
              </Button>
            </>
          )}
        </Nav>

        {token && (
          <Button
            as={Link}
            to="/Cart"
            className="btn-sm"
            variant="outline-info"
          >
            🛒Total: {formatCurrency(amount)}
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
