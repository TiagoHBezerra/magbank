import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({ onClick }) => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="magbank logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup>
          <DropdownButton
            variant="outline-light"
            as={ButtonGroup}
            title="Acessar minha conta"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">
              <Link to="/login">Pessoa física</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">
              <Link to="/login">Pessoa jurídica</Link>
            </Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-light" onClick={onClick}>
            Abra minha conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
