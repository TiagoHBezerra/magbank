import React from "react";
import { Button, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = () => {
  const latest = [
    { date: "22/07", description: "SAQUE 24H 221212", value: "300,00" },
    { date: "21/07", description: "SUPERMERCADO 512212", value: "275,00" },
    { date: "20/07", description: "NETFLIX 451236", value: "55,00" },
    { date: "15/07", description: "FARMÁCIA 121251", value: "350,00" },
  ];

  const future = [
    { date: "30/07", description: "SALÁRIO", value: "30.000,00" },
    { date: "01/08", description: "PRÊMIO", value: "15.000,00" },
  ];

  return (
    <Container className="dashboard py-4">
      <Row>
        <Col xs={12} lg={4}>
          <Row className="mb-5">
            <Col xs={4}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="4x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={8}>
              <h2>Tiago Henrique</h2>
              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          <Row className="px-2">
            <Button
              className="dashboard__button dashboard__button-active mb-2 text-start"
              variant="link"
              size="lg"
            >
              Minha conta
            </Button>
            <Button
              className="dashboard__button mb-2 text-start"
              variant="link"
              size="lg"
            >
              Pagamento
            </Button>
            <Button
              className="dashboard__button text-start"
              variant="link"
              size="lg"
            >
              Extrato
            </Button>
          </Row>
        </Col>
        <Col className="mt-lg-5 pt-lg-5" xs={12} lg={3}>
          <h3 className="my-5">Conta corrente</h3>
          <h6>
            <strong>Saldo em conta corrente</strong>
          </h6>
          <h4 className="text-success mb-4">
            <small>R$ </small>3.500<small>,00</small>
          </h4>
          <h6>
            <strong>Cheque especial</strong>
          </h6>
          <p className="mb-0">Limite disponível</p>
          <p className="mb-4"> R$ 5.000,00</p>
          <Button variant="secondary">Ver extrato</Button>
        </Col>
        <Col className="mt-lg-5 pt-lg-5" xs={12} lg={5}>
          <Tabs
            defaultActiveKey="latest"
            id="uncontrolled-tab-example"
            className="mt-5 pt-lg-5"
          >
            <Tab eventKey="latest" title="Últimos Lançamentos">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {latest.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos Futuros">
              <Table className="dashboard__table" striped bordered hover>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {future.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
