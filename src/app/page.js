"use client"
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TextDiveder from './_components/TextDivider';
import ImageCut from './_components/ImageDivider';
import VideoComponent from './_components/Video/VideoComponent';

export default function Home() {
  return (
    <main className='h-100'>

      <VideoComponent  url="./video-intro.mp4"/>

      <Container fluid  style={{marginTop : 150}} >
        <Row>
          <Col>
              <Image src="iconoverde.png" alt="Icono verde" height="50" width="50" />
          </Col>
        </Row>
      </Container>

      <TextDiveder title="barton es tu proxima compra" />
     
      <Container  className='buttom-space'>
        <Row className='g-1'>
          {[
            { url: "/caracteristicas/1.png", alt: "Hombre que construlle", title: "4 veces mas liviano" },
            { url: "/caracteristicas/2.png", alt: "Red", title: "3 veces mas resistente" },
            { url: "/caracteristicas/3.png", alt: "Anillo cargado por un hombre", title: "Flexible" },
            { url: "/caracteristicas/4.png", alt: "Tubos de ensayo con acido", title: "No corresivo" },
            { url: "/caracteristicas/5.png", alt: "Pared", title: "No conductivo" },

          ].map((item, index) => (
            <Col key={index}>
              <Card className='border-0 text-center bg-barton rounded-0' >
                <Card.Img style={{ aspectRatio : 3/4 }} variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title className='text-white text-uppercase fw-bold'>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className='buttom-space'>
        <Row>
          {[
            { url: "/caracteristicas-iconos/1.png", alt: "Hombre que construlle", title: "4 veces mas liviano" },
            { url: "/caracteristicas-iconos/2.png", alt: "Anillo cargado por un hombre", title: "Flexible" },
            { url: "/caracteristicas-iconos/3.png", alt: "Tubos de ensayo con acido", title: "No corresivo" },
            { url: "/caracteristicas-iconos/4.png", alt: "Pared", title: "No conductivo" },
            { url: "/caracteristicas-iconos/5.png", alt: "Red", title: "3 veces mas resistente" },
          ].map((item, index) => (
            <Col key={index} className='text-center '>
              <Image src={item.url} alt={item.alt} />
            </Col>
          ))}
        </Row>
      </Container>

      <TextDiveder title="Productos barton" />

      <Container className='buttom-space g-1'>
        <Row>
          {[
            { url: "/productos/1.png", alt: "Hombre que construlle", title: "Barras" },
            { url: "/productos/2.png", alt: "Anillo cargado por un hombre", title: "Malla" },
            { url: "/productos/3.png", alt: "Tubos de ensayo con acido", title: "Rollo" },
            { url: "/productos/4.png", alt: "Pared", title: "Estaca" },
            { url: "/productos/5.png", alt: "Red", title: "Especiales" },
          ].map((item, index) => (
            <Col key={index}>
              <Card className='border-0' >
                <Card.Img variant="top" src={item.url} style={{ aspectRatio: 3 / 4 }} />
                <Card.Body className='p-0'>
                  <Card.Title className='bg-barton mx-auto px-2 py-2 text-center rounded text-white text-uppercase fw-bold w-75'>
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


      <ImageCut url="barras.png" alt="Barras" />

      <TextDiveder title="Aplicaciones" />

      <Container className='buttom-space'>
        <Row className="g-1">
          {[
            { url: "/aplicaciones/1.png", alt: "Hombre que construlle", title: "Pisos", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
            { url: "/aplicaciones/2.png", alt: "Anillo cargado por un hombre", title: "Pileta", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
            { url: "/aplicaciones/3.png", alt: "Tubos de ensayo con acido", title: "Plateas", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
            { url: "/aplicaciones/4.png", alt: "Pared", title: "Premoldes", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
            { url: "/aplicaciones/5.png", alt: "Red", title: "Infraestructura", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          ].map((item, idx) => (
            <Col key={idx} className=''>
              <Card className='rounded-0'>
                <Card.Img variant="top" className='rounded-0' style={{ aspectRatio: 3 / 4 }} src={item.url} />
                <Card.Body className='text-center'>
                  <Card.Title className='text-barton text-uppercase' style={{ fontSize: 28, fontWeight: 700 }}>{item.title}</Card.Title>
                  <Card.Text style={{ color: "grey" }}>
                    {item.detail}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
