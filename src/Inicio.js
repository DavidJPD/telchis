import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Inicio() {
return (
    <div className="App">
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img
          src="https://cdn-icons-png.freepik.com/512/966/966440.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo de la empresa"
        />
        TELCHIS
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/Inicio">Inicio</Nav.Link>
          <Nav.Link href="servicios">Servicios</Nav.Link>
          <Nav.Link href="/planes">Planes</Nav.Link>
          <Nav.Link href="/contactos">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Carousel controls={true} indicators={false} interval={3000} className="position-relative">
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="img/5.png"
      alt="Primera imagen"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/4.png"
      alt="segunda imagen"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/6.png"
      alt="Tercera imagen"
    />
  </Carousel.Item>

</Carousel>
  <Container className="mt-4">
    <h1 className="text-center">TELCHIS, la mejor opción para tu comunicación</h1>
    <p className="text-center">Ofrecemos servicios de telefonía, internet, televisión y más, con la mejor calidad y el mejor precio.</p>
  </Container>
  <Container className="mt-4">
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://isten.com.mx/new/wp-content/uploads/2023/02/sd.jpg" />
          <Card.Body>
            <Card.Title>Telefonía</Card.Title>
            <Card.Text>
              Disfruta de llamadas ilimitadas a fijos y móviles, con la mejor cobertura y sin contratos.
            </Card.Text>
            <Button variant="primary" href="/Planes">Más información</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://andinalink.com/wp-content/uploads/2018/07/internet_de_las_cosas.jpg" />
          <Card.Body>
            <Card.Title>Internet</Card.Title>
            <Card.Text>
              Navega a la máxima velocidad con nuestra fibra óptica, con planes a tu medida y sin cortes.
            </Card.Text>
            <Button variant="primary" href="/Planes">Más información</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/01/television.jpeg" />
          <Card.Body>
            <Card.Title>Televisión</Card.Title>
            <Card.Text>
              Disfruta de la mejor programación con más de 100 canales.
            </Card.Text>
            <Button variant="primary" href="/Planes">Más información</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  <Container fluid={true}>
    <footer className="bg-dark text-white p-4 text-center">
      <p>TELCHIS © 2024. Todos los derechos reservados.</p>
      <p>Teléfono: 800-123-4567 | Email: contacto@telchis.com | Dirección: Tuxtla Gutiérrez, Chiapas, México.</p>
    </footer>
  </Container>
</div>
);
}

export default Inicio;