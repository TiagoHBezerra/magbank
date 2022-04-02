import React from "react";
import { Row, Col, Card, Button, Image, Container } from "react-bootstrap";
import logo from "../assets/logo_magic-pay--mobile.png";
import logoDesktop from "../assets/logo_magic-pay--desktop.png";
import "./Hero.scss";

const Hero = ({ onClick }) => (
  <Card className="text-center text-light hero">
    <Container>
      <Row className="my-lg-5">
        <Col lg className="text-lg-end mt-5">
          <Image className="d-lg-none" src={logo} />
          <Image className="d-none d-lg-inline-block" src={logoDesktop} />
        </Col>
        <Col lg className="text-lg-start my-5">
          <p>Pague suas contas pelo nosso App</p>
          <Button variant="outline-light" onClick={onClick}>
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </Card>
);

export default Hero;
