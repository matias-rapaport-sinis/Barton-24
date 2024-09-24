"use client"

import { Card } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import TextDiveder from '../_components/TextDivider';

export default function Producto({ }) {


    return (
        <main>
            <Container>
                <Row className='align-items-center g-lg-5'>
                    <Col>
                        <Image src="./productos/1.png" alt="elemenetos" />
                    </Col>
                    <Col>

                    </Col>

                </Row>
            </Container>

            <div style={{backgroundColor : "grey"}} >
                <Container >
                    <Row>
                        <TextDiveder title="Tabla de precios" />
                        <Col style={{padding : 20}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>BARRA</th>
                                        <th>Peso</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>


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