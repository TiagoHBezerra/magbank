import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMobile,
  faShoppingCart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import creditCard from "../assets/credit-card.jpg";
import "./CreditCard.scss";

const CreditCard = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
        <Row>
          <h2 className="my-5 credit-card-title">Cartão de Crédito</h2>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  size="2x"
                  color="#f05656"
                />
              </Col>
              <Col xs={10} className="h5 text-muted">
                Crédito Pessoal
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon icon={faMobile} size="2x" color="#f05656" />
              </Col>
              <Col xs={10} className="h5 text-muted">
                App
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="2x"
                  color="#f05656"
                />
              </Col>
              <Col xs={10} className="h5 text-muted">
                Pagamentos On-line
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FontAwesomeIcon icon={faWallet} size="2x" color="#f05656" />
              </Col>
              <Col xs={10} className="h5 text-muted">
                Carteira Digital
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={5}>
        <Image src={creditCard} alt="MagBank Credit Card Example" fluid />
      </Col>
    </Row>
  </Container>
);

export default CreditCard;
