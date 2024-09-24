import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TextCut({title}){

    return (
        <Container fluid className='top-space'>
            <Row>
                <Col>
                    <p className='text-cut' >{title}</p>
                </Col>
            </Row>  
        </Container>  
    );
} 