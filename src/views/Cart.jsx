import React, { useContext, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    amount,
    increaseQuantity,
    decreaseQuantity,
    cart,
    deleteElementCart,
  } = useContext(CartContext);

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card border="danger" style={{ width: "40rem" }}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title className="text-center pb-3 pt-3">
              <strong>Carrito de compras</strong>
            </Card.Title>
            {cart.map((c) => (
              <Card className="mb-3" style={{ width: "540px" }} key={c.pizzaId}>
                <div className="row g-0 border border-warning rounded">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <Card.Img className="pt-4" src={c.pizzaImg} />
                  </div>
                  <div className="col-md-8 pt-3">
                    <Card.Body>
                      <Card.Text className="text-center">
                        {c.pizzaName}
                      </Card.Text>
                      <Card.Text className="text-center">
                        {formatCurrency(c.pizzaPrice)}
                      </Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-3 align-items-center">
                          <Button
                            className="border"
                            variant="light"
                            onClick={() => decreaseQuantity(c.pizzaId)}
                          >
                            -
                          </Button>
                          <span>{c.quantity}</span>
                        </div>
                        <Button
                          className="border"
                          variant="light"
                          onClick={() => increaseQuantity(c.pizzaId)}
                        >
                          +
                        </Button>
                        <strong>
                          Total:$ {formatCurrency(c.pizzaPrice * c.quantity)}
                        </strong>

                        <Button
                          className="btn btn-danger"
                          onClick={() => deleteElementCart(c.pizzaId)}
                        >
                          🗑️
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            ))}
            <div className="pt-3 text-center">
              <h3>Total carrito: ${formatCurrency(amount)}</h3>
              <Button variant="warning" className="mt-2">
                Pagar
              </Button>
            </div>
            <div className="pt-3 text-center">
              <Button as={Link} to="/" variant="dark">
                Seguir comprando
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default Cart;
