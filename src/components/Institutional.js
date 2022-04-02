import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import {
  faGlobe,
  faMobile,
  faMobileAlt,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import "./Institutional.scss";

const Institutional = ({ onClick }) => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className="institutional-title my-5">Já nascemos digital</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam
            officia et eveniet unde consequuntur sint facere temporibus cum
            fugiat atque praesentium autem iusto nulla totam, aliquam nisi ea
            aspernatur voluptate voluptas eos tenetur! Aliquam earum reiciendis
            molestiae alias facilis error labore id similique qui, at aut
            delectus, sapiente aliquid vero asperiores quo sunt incidunt. Ullam
            voluptatibus, quia quam at cumque velit explicabo quisquam deserunt?
            Amet ullam, atque dignissimos necessitatibus ad facere facilis illum
            omnis placeat officiis dolor blanditiis est accusantium.
          </p>
          <IconText icon={faMobileAlt} color="#fff" className="mb-3">
            Sem fila e sem burocracia
          </IconText>
          <IconText icon={faMobile} color="#fff" className="mb-3">
            Simples e prático
          </IconText>
          <IconText icon={faGlobe} color="#fff" className="mb-3">
            Abertura de conta 100% on-line
          </IconText>
          <IconText icon={faShield} color="#fff">
            Transações mais seguras
          </IconText>
          <Button variant="outline-light" className="my-5" onClick={onClick}>
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
